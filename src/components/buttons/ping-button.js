const { ButtonInteraction, GuildMember } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');


module.exports = {
    customId: 'ping',
    event: 'guildMemberAdd',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction, member) => {

      const pingroleId = "1169624656773394473";
      const pingrole = interaction.guild.roles.cache.get(pingroleId);

      await interaction.member.roles.add(pingrole);

      await interaction.reply({
        content: 'The role "Ping" has been successfully added!.',
        ephemeral: true
      });

    }
};