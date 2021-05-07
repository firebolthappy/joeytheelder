const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ game: { name: "Joe's House" }})
});

client.login('ODQwMzIzODQ0NDkyNDkyODMy.YJWikA.fhXJPiHMEwKBQ1rvv-p4hpa-sZI');
