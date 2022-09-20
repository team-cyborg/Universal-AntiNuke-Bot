const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
      const e_files = fs.readdirSync(path.join(__dirname, '..', 'events')).filter((files) => files.endsWith(".js"));

      for (const file of e_files) {
            const event = require(path.join(__dirname, '..', 'events', file));

            if (event.once) {
                  client.once(event.name, (...args) => event.run(client, ...args));
            } else {
                  client.on(event.name, (...args) => event.run(client, ...args));
            }
      }
}