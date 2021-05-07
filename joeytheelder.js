const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client

client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ game: { name: "Joe's House" }})
});

client.on('message', message => {
	if (message.content === ("time for tea")) {
	message.channel.send("TEA");
}
});

client.login(BOT_TOKEN);
