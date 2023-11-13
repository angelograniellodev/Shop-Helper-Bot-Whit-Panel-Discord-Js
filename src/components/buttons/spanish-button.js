const { ButtonInteraction, GuildMember } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');


module.exports = {
    customId: 'spanish',
    event: 'guildMemberAdd',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction, member) => {

      const spanishroleId = "1169625280923586601";
      const spanishrole = interaction.guild.roles.cache.get(spanishroleId);

      await interaction.member.roles.add(spanishrole);

      await interaction.reply({
        content: 'The role "Español" has been successfully added!.',
        ephemeral: true
      });

    }
};