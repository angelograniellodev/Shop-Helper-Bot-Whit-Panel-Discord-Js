const { ActionRowBuilder, StringSelectMenuBuilder, Message, EmbedBuilder, ButtonBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const config = require('../../../config');
const { GuildMember } = require("discord.js");
const GuildSchema = require('../../../schemas/GuildSchema');

module.exports = {
    structure: {
        name: 'setuptickets',
        description: 'View all the possible commands!',
        aliases: ['h'],
        developers: false,
        cooldown: 15000
    },
    /**
     * @param {ExtendedClient} client 
     * @param {Message<true>} message 
     * @param {string[]} args 
     */
    run: async (client, message, interaction, member, args) => {

        const channelticketId = "1168760030443622441";
        const channelticket = client.channels.cache.get(channelticketId);
        message.delete();

        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('support')
            .setLabel('Support 🚨')
            .setStyle('4'),
        );
  
      const embed = {
        color: 0xD015D6,
        title: '🚨 Ticket System 👇',
        description: 'Press any of the buttons below according to the support: \n\n 🚨: General support for questions, problems, etc.',
      };
  
      await channelticket.send({ embeds: [embed], components: [row] });
    }
};
