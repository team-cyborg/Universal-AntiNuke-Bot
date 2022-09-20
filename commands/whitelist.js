const { default: Enmap } = require("enmap");

module.exports = {
  data: {
    name: 'whitelist',
    description: 'Whitelist a user.',
    options: [
      {
        name: 'add',
        description: 'Adds a user.',
        type: 1,
        options: [
          {
            name: 'user',
            description: 'a user',
            type: 6
          }
        ]
      },

      {
        name: 'remove',
        description: 'Removes a user.',
        type: 1,
        options: [
          {
            name: 'user',
            description: 'a user',
            type: 6
          }
        ]
      },

      {
        name: 'show',
        description: 'The whole list of users whitelisted.',
        type: 1
      }
    ]
  },

  /**
   * 
   * @param {import("discord.js").CommandInteraction} interaction 
   */
  async run(interaction) {

    await interaction.reply('under developement!')
    const user = interaction.options.getUser('user');

    if (interaction.options.getSubcommand() === 'add') {
      if (interaction.user.id === interaction.guild.ownerId) {

      }
    }

    if (interaction.options.getSubcommand() === 'remove') {
      if (interaction.user.id === interaction.guild.ownerId) {

      }
    }

    if (interaction.options.getSubcommand() === 'list') {
      if (interaction.user.id === interaction.guild.ownerId) {

      }
    }

  },
};