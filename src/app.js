require('dotenv').config();
const { RTMClient } = require("@slack/rtm-api");
const { WebClient } = require("@slack/web-api");

const rtm = new RTMClient(process.env.BOT_TOKEN);
const web = new WebClient(process.env.BOT_TOKEN);

rtm.start().catch(console.err);

rtm.on("ready", async () => {
    console.log("Bot started");
    sendMessage("#general", "I am online");
});

rtm.on("slack_event", async (eventType, event) => {
    if (event && event.type === "message") {
        if (event.text === "!hi") {
            sendMessage(event.channel, `Hello, <@${event.user}>`); // mentioning the user syntax is <@userId>
        }
    }
});

const sendMessage = async (channel, message) => {
    await web.chat.postMessage({
        channel: channel,
        text: message
    });
};