const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.API_KEY; // get from @BotFather
const url = `https://${process.env.APP_ID}.netlify.app/.netlify/functions/update`;
const bot = new TelegramBot(token, { polling: true });
console.log(url);

(async () => {
    await bot.setWebHook(url);
    const info = await bot.getWebHookInfo();
    console.log(info);
    })();
