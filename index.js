// imports
const { Client, GatewayIntentBits, Collection, ActivityType } = require("discord.js");
const settings = require("./config.json");
const fs = require("node:fs");
const { Enmap } = require("enmap");
require("dotenv").config();

// client instance
const client = new Client({
      intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
      ],
      presence: {
            activities: [
                  {
                        name: 'Samarth Sharma',
                        type: ActivityType.Watching
                  }
            ]
      }
});

// setting up database

// running all handler methods
fs.readdirSync('./handlers').forEach(handler => {
      require(`./handlers/${handler}`)(client);
});

// logging in to the client instance
client.login(settings.token.replace(/{env.auth}/i, process.env.token));