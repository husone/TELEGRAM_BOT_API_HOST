# Telegram Bot API

Simple Telegram bot. Extensible and deployable immediately using Netlify.

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/husone/TELEGRAM_BOT_API_HOST)


## Add Webhook

Before hosting on netlify, set your bot's webhook first
```cli
node setBot
```

## Extending

Build in new commands that your bot can respond to by adding `case` statements
to the `switch` statement in [netlify/functions/update.js](netlify/functions/update.js)

