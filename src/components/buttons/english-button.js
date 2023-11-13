const { ButtonInteraction, GuildMember } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');


module.exports = {
    customId: 'english',
    event: 'guildMemberAdd',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction, member) => {

      const englishroleId = "1169625134643023963";
      const englishrole = interaction.guild.roles.cache.get(englishroleId);

      await interaction.member.roles.add(englishrole);

      await interaction.reply({
        content: 'The role "English" has been successfully added!.',
        ephemeral: true
      });

    }
};