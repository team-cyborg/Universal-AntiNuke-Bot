const { Client } = require("discord.js");

module.exports = {
      name: 'interactionCreate',
      once: false,

      /**
       * 
       * @param {Client} client 
       * @param {import("discord.js/typings").Interaction} interaction 
       */
      run: async (client, interaction) => {
            const command = client.commands.get(interaction.commandName);

            if (!command) await interaction.reply({ content: `Command \`${command}\` not found.` });

            try {
                  await command.run(interaction);
            } catch (err) {
                  console.error(err);
                  await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
      }
}