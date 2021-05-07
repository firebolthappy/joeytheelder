const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client

client.on("ready", () => { // prints "Ready!" to the console once the bot is online
	console.log("Ready!");

});

client.login(process.env.BOT_TOKEN); // starts the bot up
