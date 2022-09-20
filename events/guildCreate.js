const { ChannelType } = require("discord.js");

module.exports = {
      name: 'guildCreate',
      once: false,

      /**
       * 
       * @param {import("discord.js").Client} client 
       * @param {import("discord.js").Guild} guild
       */
      run: async (client, guild) => {
            let check_db = client.config.get(guild.id);

            const fetched_channels = guild.channels.cache.filter(channel => channel.type === ChannelType.GuildText);
            const first_channel = fetched_channels.find(chn => chn.position === 0);

            if (check_db) {

                  await first_channel.send({
                        embeds: [{
                              title: 'Universal™',
                              description: [
                                    '> Greetings, I am universal, a discord antinuke bot dedicated to preventing guild nukes.',
                                    '> Some usefull commands: ` /setup `, ` /help `, ` /guide `',
                                    '> ',
                                    '> 🔴 Database exists, use ` /setup ` to start customizing.',
                              ].join('\n'),
                              color: 0x5440cd,
                              thumbnail: {
                                    url: client.user.displayAvatarURL()
                              }
                        }
                        ]
                  })
            } else {
                  client.config.set(guild.id,
                        {
                              name: guild.name,
                              guild_id: guild.id,
                              owner: guild.ownerId,
                              wl_users: [],
                              bl_users: []
                        });

                  await first_channel.send({
                        embeds: [
                              {
                                    title: 'Universal™',
                                    description: [
                                          '> Greetings, I am universal, a discord antinuke bot dedicated to preventing guild nukes.',
                                          '> Some usefull commands: ` /setup `, ` /help `, ` /guide `',
                                          '> ',
                                          '> 🟢 Default config has been created, customize it with: ` /setup `',
                                    ].join('\n'),
                                    color: 0x5440cd,
                                    thumbnail: {
                                          url: client.user.displayAvatarURL()
                                    }
                              }
                        ]
                  })
            }
      }
}