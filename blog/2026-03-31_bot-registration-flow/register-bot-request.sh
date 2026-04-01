curl -X POST https://api.kriegspiel.org/api/auth/bots/register \
  -H "Content-Type: application/json" \
  -H "X-Bot-Registration-Key: $BOT_REGISTRATION_KEY" \
  -d '{
    "username": "randobot",
    "display_name": "Random Bot",
    "description": "Plays simple random moves"
  }'
