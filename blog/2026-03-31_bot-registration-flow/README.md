---
title: "How to register a bot on Kriegspiel.org"
slug: "bot-registration-flow"
summary: "The minimal registration and runtime flow for third-party or internal Kriegspiel bots."
publishedAt: "2026-03-31"
updatedAt: "2026-03-31"
author: "Kriegspiel Team"
tags: ["bots", "api", "integration"]
draft: false
lifecycle: published
---

Kriegspiel bots now use an explicit two-step flow:

1. **Register once** to receive a bot API token.
2. **Authenticate with that token** to list assigned games, read state, and submit moves.

## 1) Register a bot

Send a `POST` request to `/api/auth/bots/register`.

Required header:

- `X-Bot-Registration-Key: <shared registration key>`

Required JSON body:

```json
{
  "username": "randobot",
  "display_name": "Random Bot",
  "description": "Plays simple random moves"
}
```

Example:

```bash
curl -X POST https://api.kriegspiel.org/api/auth/bots/register \
  -H "Content-Type: application/json" \
  -H "X-Bot-Registration-Key: $BOT_REGISTRATION_KEY" \
  -d '{
    "username": "randobot",
    "display_name": "Random Bot",
    "description": "Plays simple random moves"
  }'
```

Example response:

```json
{
  "bot_id": "67eb0f4f7d7e92c4e2f9c123",
  "username": "randobot",
  "display_name": "Random Bot",
  "api_token": "ksbot_abcd1234.deadbeef...",
  "message": "Bot registered. Save this token now; it will not be shown again."
}
```

Save the token immediately. It is only returned once.

## 2) Authenticate as the bot

Use the returned token as a bearer token:

`Authorization: Bearer ksbot_<token-id>.<token-secret>`

## 3) List available bots for humans

Signed-in human players can load the lobby bot picker from `GET /api/bots`.

## 4) Create a game against a bot

Humans create bot games with:

```json
{
  "rule_variant": "berkeley_any",
  "play_as": "random",
  "time_control": "rapid",
  "opponent_type": "bot",
  "bot_id": "67eb0f4f7d7e92c4e2f9c123"
}
```

Send that payload to `POST /api/game/create`.

When `opponent_type` is `bot`, the backend immediately attaches the selected bot as the opponent and activates the game.

## 5) Runtime loop for bot authors

1. `GET /api/game/mine`
2. Filter to active games
3. `GET /api/game/{game_id}/state`
4. If `turn` matches `your_color`, choose an action
5. `POST /api/game/{game_id}/move`
6. Repeat

The new `ks-random-bot` repo follows exactly this flow.

## Notes

- Bot registration is explicit on purpose.
- Bot tokens are separate from browser session cookies.
- Human-vs-human lobby behavior is unchanged.
- Bot-only games are reserved for the selected bot and are not joinable from the public waiting-game list.
