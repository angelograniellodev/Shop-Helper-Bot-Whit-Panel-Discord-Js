const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const configEx = require('../../../config_extended');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(configEx.slashCommandsConfigs.suggestNameCommand)
        .setDescription(configEx.slashCommandsConfigs.suggestNameCommandDescription)
        .addStringOption(option =>
            option.setName('text')
                .setDescription(configEx.slashCommandsConfigs.suggestOptionsCommandDescription)
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
        if (interaction.channelId !== configEx.slashCommandsConfigs.suggestChannelId) {
            await interaction.reply(configEx.slashCommandsConfigs.suggestNotChannel);
            return;
        }

        const suggestText = interaction.options.getString('text');


        const userName = interaction.user.username;
        const userAvatarURL = interaction.user.displayAvatarURL({ format: 'png', dynamic: true });

        const suggestEmbed = new EmbedBuilder()
            .setColor(configEx.slashCommandsConfigs.suggestEmbedColor)
            .setTitle(`${configEx.slashCommandsConfigs.suggestEmbedTitle} ${userName}`)
            .setDescription(suggestText)
            .setFooter({ text: `Bot made by @devangelo25` })
            .setAuthor({ name: userName, iconURL: userAvatarURL })
            .setThumbnail(userAvatarURL);

        const suggestMessage = await interaction.reply({ embeds: [suggestEmbed], fetchReply: true });

        await suggestMessage.react(configEx.slashCommandsConfigs.suggestEmbedReact1); // Reacción de un cheque verde (✔️)
        await suggestMessage.react(configEx.slashCommandsConfigs.suggestEmbedReact2); // Reacción de una equis roja (❌)
    }
};
