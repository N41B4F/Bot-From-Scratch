const { Client, GatewayIntenBit } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntenBit.Guilds,
    GatewayIntenBit.GuildMessages,
    GatewayIntenBit.MessageConte,
  ],
});

client.on("ready", () => {
  console.log(`Bot conectado como ${client.user.tag} !`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() === "ping") {
    message.channel.send("Pong!");
  }
});

client.login(process.env.TOKEN);
