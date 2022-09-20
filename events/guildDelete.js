const { ChannelType } = require("discord.js");

module.exports = {
      name: 'guildDelete',
      once: false,

      /**
       * 
       * @param {import("discord.js").Client} client 
       * @param {import("discord.js").Guild} guild
       */
      run: async (client, guild) => {
            let check_db = client.config.get(guild.id);

            if (check_db) {
                  const data = client.config.get(guild.id);

                  console.log(`[UNIVERSAL] :: Kicked from ${guild.name}, Database back up sucessfull.`);

                  if (!client.backup.has(guild.id)) {

                        client.backup.set(guild.id, data).then(() => client.config.delete(guild.id));

                  } else client.config.delete(guild.id)

            }
      }
}