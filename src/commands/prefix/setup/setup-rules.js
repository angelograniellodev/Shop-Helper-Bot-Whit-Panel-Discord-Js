const { Message, EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const config = require('../../../config');
const { GuildMember } = require("discord.js");
const GuildSchema = require('../../../schemas/GuildSchema');

module.exports = {
    structure: {
        name: 'setuprules',
        description: 'View all the possible commands!',
        aliases: ['h'],
        developers: true,
        cooldown: 15000
    },
    /**
     * @param {ExtendedClient} client 
     * @param {Message<true>} message 
     * @param {string[]} args 
     */
    run: async (client, message, interaction, member, args) => {

        const channelrulesId = "1169316887923015700";
        const channelrules = client.channels.cache.get(channelrulesId);
        message.delete();
        await channelrules.send({
            content: '📜 To view the rules please select the language you prefer below. 👇',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('rules-select')
                            .setPlaceholder('Select your language')
                            .addOptions(
                                { label: 'Español', value: 'spanish' },
                                { label: 'English', value: 'english' },
                            )
                    )
            ]
        });

    }
};
