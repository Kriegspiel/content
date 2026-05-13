curl -X POST https://api.kriegspiel.org/auth/bots/register \
  -H "Content-Type: application/json" \
  -H "X-Bot-Registration-Key: $BOT_REGISTRATION_KEY" \
  -d '{
    "username": "randobot",
    "display_name": "Random Bot",
    "owner_email": "bot-random@kriegspiel.org",
    "description": "Plays simple random moves.",
    "listed": true,
    "supported_rule_variants": ["berkeley", "berkeley_any", "cincinnati", "wild16", "rand", "english", "crazykrieg"]
  }'
