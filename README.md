# Telegram Bot API

Simple Telegram bot. Extensible and deployable immediately using Netlify.

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/husone/TELEGRAM_BOT_API_HOST)


## Add Webhook

```javascript
const token = process.env.API_KEY;
const url = process.env.APP_ID;
const bot = new TelegramBot(TOKEN, { polling: true });
bot.setWebHook(`${url}/.netlify/functions/update/bot${TOKEN}`);
```

## Extending

Build in new commands that your bot can respond to by adding `case` statements
to the `switch` statement in [netlify/functions/update.js](netlify/functions/update.js)

