const { ButtonInteraction, GuildMember, Permissions, TextChannel, GuildCategory, ActionRowBuilder, EmbedBuilder, ButtonBuilder } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const { ChannelType, PermissionsBitField } = require('discord.js');
const discordTranscripts = require('discord-html-transcripts');


module.exports = {
    customId: 'transcript-support-ticket',
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
            content: "Your request is being processed..."
        })

        const attachment = await discordTranscripts.createTranscript(channelToDelete);
        channelToDelete.send({
          files: [attachment],
        });

    }
};