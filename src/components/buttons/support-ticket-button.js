const { ButtonInteraction, GuildMember, Permissions, TextChannel, GuildCategory, ActionRowBuilder, EmbedBuilder, ButtonBuilder } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');
const { ChannelType, PermissionsBitField } = require('discord.js');

module.exports = {
    customId: 'support',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction, member, message) => {
        const user = interaction.user;
        const guild = client.guilds.cache.get("1167347675549683783");
        const channelName = `${user.username}-support`;
        const parent = "1169663732285198426";
        //Comprobar que no tenga otro ticket creado
        if (interaction.guild.channels.cache.find(channel => channel.name === channelName)) {
            await interaction.reply({
                content: "Ya tienes un ticket creado en la categoria de support",
                ephemeral: true,
            });
            return;
        }

        // Ephermal reply
        await interaction.reply({
            content: 'The ticket "Support" has been successfully created!.',
            ephemeral: true
        });

        // Creación del canal
        const ticketChannel = await guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
            parent: parent,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
            ],
        });

        // Mandar mensaje con "Hola" al canal de ticket creado
        const messageContent = `👋 You will be attended to in a moment ${interaction.user} `;
        ticketChannel.send(messageContent);

        //Mandar Embeds con botones para cerrar el ticket
        const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('close-support-ticket')
            .setLabel('Close Ticket ❌')
            .setStyle('4'),
            new ButtonBuilder()
            .setCustomId('transcript-support-ticket')
            .setLabel('Transcript Ticket 📂')
            .setStyle('1'),
        );
  
        const embedticket = {
            color: 0xD015D6,
            title: '🚨 Ticket System 👇',
            description: 'Welcome to the support panel, below we will tell you what each button is for :): \n\n ❌: This will permanently delete the channel created for the ticket, if you want to save the conversation before deleting it please press the transcript button. \n\n 🧍: Report a person for non-compliance or a bug in our applications. \n\n 📂: Press this button to save your ticket in html format to view it even if the channel has been deleted.',
        };

        await ticketChannel.send({ embeds: [embedticket], components: [row], fetchReply: true });
    }
};
