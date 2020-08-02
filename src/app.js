require('dotenv').config();
const { RTMClient } = require("@slack/rtm-api");
const rtm = new RTMClient(process.env.BOT_TOKEN);

rtm.start().catch(console.err);

rtm.on('ready', async () => {
    console.log("Bot started");
})