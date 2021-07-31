require('dotenv').config();

const scheduler = require('node-schedule');

const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.BOT_TOKEN);

const birthdays = [
  {
    name: 'Test 1',
    date: new Date(2021, 6, 31, 12, 5, 0)
  },
  {
    name: 'Test 2',
    date: new Date(2021, 6, 31, 12, 6, 0)
  }
]

birthdays.forEach(birthday => {
  scheduler.scheduleJob(birthday.date, () => {
    slimbot.sendMessage(343754242, `Alles Gute zum Geburtstag ${birthday.name}! 🎉🎉`);
  })
})

slimbot.startPolling();
