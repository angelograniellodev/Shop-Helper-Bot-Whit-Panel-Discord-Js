const { ButtonInteraction, GuildMember, Permissions, TextChannel, GuildCategory, ActionRowBuilder, EmbedBuilder, ButtonBuilder } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const { ChannelType, PermissionsBitField } = require('discord.js');


module.exports = {
    customId: 'close-support-ticket',
    event: 'guildMemberAdd',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction, member) => {

        const user = interaction.user;
        const guild = client.guilds.cache.get("1167347675549683783");
        const channelName = `${user.username}-support`;
        const channelToDelete = interaction.guild.channels.cache.find((ch) => ch.name === channelName);

        await interaction.reply({
            content: "Your ticket is being deleted..."
        })

        if (channelToDelete instanceof TextChannel) {
            let count = 5;
            const countdownInterval = setInterval(() => {
                if (count > 0) {
                    channelToDelete.send(`The ticket will be deleted in ${count}...`);
                } else {
                    clearInterval(countdownInterval);
                    channelToDelete.delete()
                        .then(() => {})
                        .catch((error) => {});
                }
                count--;
            }, 2500);
        } else {
            console.error(`No channel found with the name "${channelName}".`);
        }
    }
};