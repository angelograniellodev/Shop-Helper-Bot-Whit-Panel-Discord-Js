const { log } = require("../../functions");
const ExtendedClient = require('../../class/ExtendedClient');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

module.exports = {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    run: (_, client) => {

        log('Logged in as: ' + client.user.tag, 'done');


        wss.on('connection', ws => {
            ws.on('message', data => {
                const parsedData = JSON.parse(data);
                const { message, channelId } = parsedData;
                const channelmsgcustom = client.channels.cache.get(channelId);
                if (channelmsgcustom) {
                    channelmsgcustom.send(`${message}`);
                }else{
                    console.log("NOT CHANNEL ID FOUND")
                }
            });
        });
        
    }
};