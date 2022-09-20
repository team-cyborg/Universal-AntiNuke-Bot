const { Collection, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const settings = require('../config.json');
require('dotenv').config();

module.exports = (client) => {
      client.commands = new Collection();
      const commands = [];
      const rest = new REST({ version: '10' }).setToken(settings.token.replace(/{env.auth}/i, process.env.token));

      const c_files = fs.readdirSync(path.join(__dirname, '..', 'commands')).filter((files) => files.endsWith('.js'));

      for (const file of c_files) {
            const cmd = require(path.join(__dirname, '..', 'commands', file));

            client.commands.set(cmd.data.name, cmd);
            commands.push(cmd.data);

      }
      rest.put(Routes.applicationGuildCommands(settings.id, settings.server), { body: commands }).then(data => { console.log(`Successfully registered ${data.length} application commands.`); }).catch(console.error);
}