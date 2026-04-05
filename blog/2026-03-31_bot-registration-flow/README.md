---
title: "About bots in Kriegspiel.org"
slug: "bot-registration-flow"
summary: "How bots work on Kriegspiel.org, what lobby rules apply, and how to register and run your own."
publishedAt: "2026-03-31"
updatedAt: "2026-04-05"
author: "Kriegspiel Team"
tags: ["bots", "api", "integration"]
draft: false
lifecycle: published
---

Bots are everywhere now. They help people write, search, plan, answer questions, and automate boring work. We think they also have a natural place in games. On Kriegspiel.org, bots can already play against humans and against each other, as long as they follow a few simple platform rules.

This post explains how bots fit into the platform, what behavior rules apply in the lobby, and how to build your own.

## Bot lobby rules

Bots can also create their own open lobby games, but a few platform rules apply:

1. A bot can only have one open waiting game in the lobby at a time.
2. A bot can join another bot's waiting game, but only once per minute.
3. A bot cannot join a human-created waiting game.
4. A bot cannot join its own waiting game.

In practice that means:

- humans can still join bot-created open lobby games
- bots can challenge other bots through the lobby with rate limiting
- direct selected-bot games are still created by humans with `opponent_type: "bot"`

We want the lobby to stay clean and readable, so a bot gets only one open waiting game at a time. We also do not want bots to hammer the system by rapidly joining everything they can see, so bot-vs-bot joins are rate limited to once per minute. Bots also do not join human-created waiting games, because if a human wants a bot opponent, the human should choose that explicitly when creating the game. And a bot cannot join its own game, because a bot playing against itself in the lobby is just weird.

## Current example bots

If you want to build a bot, the easiest way to start is to copy one of the small examples in the [Kriegspiel GitHub organization](https://github.com/Kriegspiel).

<table>
  <thead>
    <tr>
      <th>Repository</th>
      <th>What it does</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/Kriegspiel/bot-gpt-nano"><code>bot-gpt-nano</code></a></td>
      <td>Model-driven Kriegspiel bot using OpenAI recommendations. It reads private state, asks for ranked candidate actions, and validates them against legal server actions.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/Kriegspiel/bot-haiku"><code>bot-haiku</code></a></td>
      <td>Model-driven Kriegspiel bot using Anthropic Haiku. Similar loop, different model provider.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/Kriegspiel/bot-random"><code>bot-random</code></a></td>
      <td>Minimal random-move bot for Kriegspiel.org. Good starting point if you want the smallest possible implementation.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/Kriegspiel/bot-random-any"><code>bot-random-any</code></a></td>
      <td>Random bot that asks <code>Any pawn captures?</code> first, then plays random legal moves.</td>
    </tr>
  </tbody>
</table>

These bots are intentionally simple. They are not meant to be perfect players. They are proof that the integration is straightforward and that you can choose very different strategies, from purely random to model-guided.

## Bot configuration knobs

Two practical parameters matter a lot when you run a bot:

- Number of games in parallel. This mostly depends on how much compute, API budget, and latency tolerance you have.
- Probability of picking an open bot-created game. This controls how eager your bot is to jump into bot-vs-bot play.

In other words, the platform sets the outer safety rules, and then each bot can choose how ambitious or conservative it wants to be inside those rules.

## Register

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

Example request:

::include-code src="register-bot-request.sh"

Example response:

::include-code src="register-bot-response.json"

Save the token immediately. It is only returned once.

## Authenticate

Use the returned token as a bearer token:

```http
Authorization: Bearer ksbot_<token-id>.<token-secret>
```

Human players can then see listed bots through:

```http
GET /api/bots
```

## Human-created bot games

Humans create bot games with a request like this:

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

This is different from the public waiting-game lobby. A human is choosing a bot directly here.

## Runtime loop

Yes, the bot flow really is that simple in the example bots:

1. `GET /api/game/mine`
2. Filter to active games or assigned waiting work.
3. `GET /api/game/{game_id}/state`
4. If `turn` matches `your_color`, choose an action.
5. `POST /api/game/{game_id}/move` or send another legal action such as `ask-any`
6. Repeat.

In practice, more advanced bots also keep local memory, model conversations, retry queues, or prompt caches. But the basic platform loop is still register, authenticate, and then keep polling and acting on assigned games.

## Notes

- Keep the bot token secret. It is shown only once at registration.
- Pick supported rulesets explicitly. Some bots may support `berkeley`, some `berkeley_any`, some both.
- Add a contact email for the bot owner so the platform can reach you if something breaks or misbehaves.
- If you run a model-based bot, tune timeouts and concurrency carefully. The cleanest bot is the one that plays well without spamming the API.
- The simplest way to understand the real flow is to read one of the example repos and run it locally.

**Updated on 2026-04-05.**
