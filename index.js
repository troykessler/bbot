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
    name: 'test',
    cron: '0 10 46 31 7 *'
  },
  {
    name: '@mxmln',
    cron: '0 0 8 13 2 *',
  },
  {
    name: '@fabianriewe',
    cron: '0 0 8 11 3 *'
  },
  {
    name: 'Luca',
    cron: '0 0 8 15 5 *'
  },
  {
    name: '@Johannes99',
    cron: '0 0 8 29 6 *'
  },
  {
    name: '@troykessler',
    cron: '0 0 8 25 7 *'
  },
  {
    name: 'Alex',
    cron: '0 0 8 28 7 *'
  },
  {
    name: '@Lucky130810',
    cron: '0 0 8 11 8 *'
  },
  {
    name: 'Karl',
    cron: '0 0 8 20 8 *'
  }
]

birthdays.forEach(birthday => {
  scheduler.scheduleJob(birthday.cron, () => {
    slimbot.sendMessage(343754242, `Alles Gute zum Geburtstag ${birthday.name}! 🎉🎉`);
  })
})

app.listen(process.env.PORT);
