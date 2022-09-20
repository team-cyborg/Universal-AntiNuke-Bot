module.exports = {
      data: {
            name: 'ping',
            description: 'Ping command.',
      },
      async run(interaction) {
            await interaction.reply(interaction.client.ws.ping + 'ms!');
      },
};