module.exports = {
      name: 'ready',
      once: true,

      /**
       * 
       * @param {import("discord.js").Client} client 
       */
      run: async (client) => {
            console.log('Client Online');
      }
}