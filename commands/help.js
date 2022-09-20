const { ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
      data: {
            name: 'help',
            description: 'Helps you!',
      },

      /**
       * 
       * @param {import("discord.js").CommandInteraction} interaction 
       */
      async run(interaction) {
            let cmd_array = [];

            interaction.client.commands.map(cmd => cmd_array.push(`> \` ${cmd.data.name} \``))
            console.log(cmd_array);

            await interaction.reply({
                  embeds: [
                        {
                              title: 'Universal™',
                              description: [
                                    '> Greetings, I am Universal,',
                                    '> A discord anti-nuke bot dedicated to preventing guild nukes.',
                              ].join("\n"),
                              fields: [
                                    {
                                          name: 'Commands',
                                          value: `${cmd_array.join('\n')}`,
                                    }
                              ],
                              color: 0x5440cd,
                              thumbnail: { url: interaction.client.user.displayAvatarURL() }
                        }
                  ],
                  components: [
                        new ActionRowBuilder().addComponents(new ButtonBuilder().setStyle(ButtonStyle.Link).setLabel('Support Server').setURL('https://discord.gg/2V6TVaBPtu'))
                  ]
            })
      },
};