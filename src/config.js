module.exports = {
  client: {
    token: "MTE3MjYzMjE3NjQ3MTMxODYxOQ.G3c20k.icIEHLLuTj9giLuNsJub0bOiazHblxjnMhepKM",
    id: "1172632176471318619",
  },
  handler: {
    prefix: "!",
    deploy: true,
    commands: {
      prefix: true,
      slash: true,
      user: true,
      message: true,
    },
    mongodb: {
      uri: "mongodb+srv://helpershop:pwdfxlzZ5rkPcSdv@helpershop.2ny0cy0.mongodb.net/?retryWrites=true&w=majority",
      toggle: true,
    },
  },
  users: {
    developers: ["1167345857843183636"],
  },
  messageSettings: {
    nsfwMessage: "The current channel is not a NSFW channel.",
    developerMessage: "You are not authorized to use this command.",
    cooldownMessage: "Slow down buddy! You're too fast to use this command.",
    notHasPermissionMessage:
      "You do not have the permission to use this command.",
    missingDevIDsMessage:
      "This is a developer only command, but unable to execute due to missing user IDs in configuration file.",

    // welcome settings locales
    //if you want to completely modify the welcome message please go to memberjoin.js /events/client
    welcomeMessage1: "👋🎈 Welcome to the server, ",
    welcomeMessage2: "remember to read our server rules to avoid any inconvenience: ",
    welcomeMessage3: " Also if you have any questions you can read the channel of for more information: ",
  },
};
