require('dotenv').config()

const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.BOT_TOKEN);

setInterval(() => slimbot.sendMessage(343754242, 'Message received'), 3000)

slimbot.startPolling();
