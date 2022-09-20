const { default: Enmap } = require("enmap");

module.exports = {
  data: {
    name: 'whitelist-user',
    description: 'Whitelist a user.',
    options: [
      {
        name: 'user',
        description: 'the user to whitelist',
        type: 6,
        required: true
      }
    ]
  },

  /**
   * 
   * @param {import("discord.js").CommandInteraction} interaction 
   */
  async run(interaction) {
    await interaction.reply('under developement!')
    // const user_to_whitelist = interaction.options.getUser('user');

    // if (user_to_whitelist.id === interaction.guild.ownerId) await interaction.reply('Server owners are whitelisted by default!');
  },
};