const localtunnel = require('localtunnel');
const config = require("../config.json");

/** run the tunnel */
module.exports = function startTunnel() {
    let url;
    (async () => {
        const tunnel = await localtunnel({
            port: config.port,
            host: conig.host

        });
    
      // the assigned public url for your tunnel
      // i.e. https://abcdefgjhij.localtunnel.me
        console.log(tunnel.url);
    
      tunnel.on('close', () => {
        // tunnels are closed
      });
        tunnel.on('error', (e) => {
            console.log(e);
        })
    })();
}

