const { StringSelectMenuInteraction } = require('discord.js');
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    customId: 'rules-select',
    run: async (client, interaction) => {
        const value = interaction.values[0];
        let responseMessage = '';

        switch (value) {
            case 'spanish':
                responseMessage = '**Reglas** \n\n 1: No spam en ningun canal o en el DM de los usuarios \n\n 2: No faltar el respeto en ningun canal de nuestra comunidad \n\n 3: Uso correcto de los canales de nuestra comunidad \n\n 4: Seguir estrictamente la normativa de discord https://discord.com/guidelines \n\n Incumplir cualquiera de las reglas puede llevarte a recibir baneos permanentes o sanciones a corto plazo';
                break;
            case 'english':
                responseMessage = responseMessage = '**Rules** \n\n 1: No spam in any channel or in DMs to users \n\n 2: No disrespect in any of our community channels \n\n 3: Proper use of our community channels \n\n 4: Strictly follow Discord\'s guidelines at https://discord.com/guidelines \n\n Violating any of the rules can result in permanent bans or short-term sanctions';
                break;
            default:
                responseMessage = 'ERROR NULE VALUE';
                break;
        }

        await interaction.reply({
            content: responseMessage,
            ephemeral: true
        });
    }
};
