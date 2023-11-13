const { log } = require("../../functions");
const config = require('../../config');
const configEx = require('../../config_extended');
const ExtendedClient = require('../../class/ExtendedClient');
const { GuildMember } = require("discord.js");

module.exports = {
    event: 'guildMemberAdd',
    once: true,
    run: async (client, member) => {
        const roleID = configEx.welcomeEventConfigs.automaticRoleId;
        const role = member.guild.roles.cache.get(roleID);

        const channelId = configEx.welcomeEventConfigs.welcomeChannelId
        const channel = member.guild.channels.cache.get(channelId);

        const ruleschannelId = configEx.welcomeEventConfigs.rulesChannelId;
        const ruleschannel = member.guild.channels.cache.get(ruleschannelId);

        const readmechannelId = configEx.welcomeEventConfigs.readmeChannelId
        const readmechannel = member.guild.channels.cache.get(readmechannelId);



        if (configEx.welcomeEventConfigs.automaticroleStatus == true) {
            await member.roles.add(role);
        } else {
            console.log("not automatic role true")
        }

        if (configEx.welcomeEventConfigs.automaticmessageWelcomeStatus == true) {
            channel.send(`${config.messageSettings.welcomeMessage1} ${member} ${config.messageSettings.welcomeMessage2} ${ruleschannel.toString()} ${config.messageSettings.welcomeMessage3} ${readmechannel.toString()} 😊💝.`);
            channel.send('https://tenor.com/view/divider-gif-22551669');
        } else {
            console.log("not automatic welcome message true")
        }

    }
};
