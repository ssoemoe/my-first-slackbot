require('dotenv').config();
const { RTMClient } = require("@slack/rtm-api");
const rtm = new RTMClient(process.env.BOT_TOKEN);
console.log(process.env.BOT_TOKEN);