const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configEx = require('../../../config_extended');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(configEx.slashCommandsConfigs.reviewNameCommand)
        .setDescription(configEx.slashCommandsConfigs.reviewNameCommandDescription)
        .addStringOption(option =>
            option.setName('text')
                .setDescription(configEx.slashCommandsConfigs.reviewOptionsCommandDescription)
                .setRequired(true)
        ),
    options: {
        cooldown: 5000
    },
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        if (interaction.channelId !== configEx.slashCommandsConfigs.reviewChannelId) {
            await interaction.reply(configEx.slashCommandsConfigs.reviewNotChannel);
            return;
        }

        const reviewText = interaction.options.getString('text');

        const userName = interaction.user.username;
        const userAvatarURL = interaction.user.displayAvatarURL({ format: 'png', dynamic: true });

        const reviewEmbed = new EmbedBuilder()
            .setColor(configEx.slashCommandsConfigs.reviewEmbedColor)
            .setTitle(configEx.slashCommandsConfigs.reviewEmbedTitle)
            .setDescription(reviewText)
            .setFooter({ text: 'Bot made by @devangelo25' })
            .setAuthor({ name: userName, iconURL: userAvatarURL })
            .setThumbnail(userAvatarURL);

        await interaction.reply({ embeds: [reviewEmbed] });
    }
};
