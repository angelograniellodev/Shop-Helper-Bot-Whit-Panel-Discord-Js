module.exports = {
    welcomeEventConfigs: {
        automaticroleStatus: false,
        automaticmessageWelcomeStatus: false,
        automaticRoleId: "1168756692167704676",
        welcomeChannelId: "1169794060421189662",
        rulesChannelId: "1168759754504544317",
        readmeChannelId: "1168762938157449216",
    }, 
    slashCommandsConfigs: {
       // - /review command configs - //

       reviewNameCommand: "review",
       reviewNameCommandDescription: "Put a review about a product or the developer",
       reviewOptionsCommandDescription: "The text to include in the review",

       reviewChannelId: "1169794060421189662",
       reviewNotChannel: "You can\'t use this here.",

       reviewEmbedColor: 0x0099FF,
       reviewEmbedTitle: "Reviews for service and products",
       // - /review command configs ends - //

      // - /suggest command configs - //

      suggestNameCommand: "suggest",
      suggestNameCommandDescription: "Put a suggest about a product or the developer",
      suggestOptionsCommandDescription: "The text to include in the suggest",

      suggestChannelId: "1169794060421189662",
      suggestNotChannel: "You can\'t use this here.",

      suggestEmbedColor: 0x0099FF,
      suggestEmbedTitle: "Suggest By: ",
      suggestEmbedReact1: "✅",
      suggestEmbedReact2: "❌",
     // - /suggest command configs ends - //
    },
};
  