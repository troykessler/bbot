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
    cron: '* 41 10 31 7 *'
  },
  // {
  //   name: '@mxmln',
  //   cron: '* * 8 13 2 *',
  // },
  // {
  //   name: '@fabianriewe',
  //   date: new Date(2021, 2, 11, 8, 0, 0)
  // },
  // {
  //   name: 'Luca',
  //   date: new Date(2021, 4, 15, 8, 0, 0)
  // },
  // {
  //   name: '@Johannes99',
  //   date: new Date(2021, 5, 29, 8, 0, 0)
  // },
  // {
  //   name: '@troykessler',
  //   date: new Date(2021, 6, 25, 8, 0, 0)
  // },
  // {
  //   name: 'Alex',
  //   date: new Date(2021, 6, 28, 8, 0, 0)
  // },
  // {
  //   name: '@Lucky130810',
  //   date: new Date(2021, 7, 11, 8, 0, 0)
  // },
  // {
  //   name: 'Karl',
  //   date: new Date(2021, 7, 20, 8, 0, 0)
  // }
]

birthdays.forEach(birthday => {
  scheduler.scheduleJob(birthday.cron, () => {
    slimbot.sendMessage(343754242, `Alles Gute zum Geburtstag ${birthday.name}! 🎉🎉`);
  })
})

app.listen(process.env.PORT);
