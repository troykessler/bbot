require('dotenv').config();

const Slimbot = require('slimbot');
const express = require('express');

const slimbot = new Slimbot(process.env.BOT_TOKEN);
const scheduler = require('node-schedule');

const app = express();

app.get('/', (_, res) => {
  res.send(`StonesEmpireBot - ${new Date().toUTCString()}`);
});

const birthdays = [
  {
    name: 'Test 1',
    date: new Date(2021, 6, 31, 10, 27, 0)
  },
  {
    name: '@troykessler',
    date: new Date(2021, 6, 31, 10, 27, 0)
  }
]

birthdays.forEach(birthday => {
  scheduler.scheduleJob(birthday.date, () => {
    slimbot.sendMessage(343754242, `Alles Gute zum Geburtstag ${birthday.name}! 🎉🎉`);
  })
})

app.listen(process.env.PORT);
