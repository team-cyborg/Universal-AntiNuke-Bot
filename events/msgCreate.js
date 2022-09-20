const { Client, Message } = require("discord.js/typings");

module.exports = {
      name: 'messageCreate',
      once: false,

      /**
       * 
       * @param {Client} client 
       * @param {Message} message 
       */
      run: async (client, message) => {
            if (message.mentions.users.has(client.user.id)) {
                  message.reply({
                        embeds: [
                              {
                                    title: 'Universal™',
                                    description: [
                                          '> Greetings, I am universal, a discord antinuke bot dedicated to preventing guild nukes.',
                                          '> Use ` /help ` to get started!'
                                    ].join('\n'),
                                    color: "#5440cd",
                                    thumbnail: {
                                          url: client.user.displayAvatarURL()
                                    }
                              }
                        ]
                  }).then((msg) => {
                        setTimeout(() => {
                              msg.delete();
                        }, 3000);
                  })
            }
      }
}