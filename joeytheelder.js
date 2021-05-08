const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  // If the message is '!rip'
	if (((message.content.lowercase.includes("hello")) || (message.content.lowercase.includes("hey")) || (message.content.lowercase.includes("howdy")) || (message.content.lowercase.includes("how's it going")) || (message.content.lowercase.includes("what's up")) || (message.content.lowercase.includes("wassup")) || (message.content.lowercase.includes("hi"))) && !(message.author.bot)) { //HELLO
		var num = getRandomInt(0, 7);
		if (num === 0) {
			message.channel.send("Hey");
		} else if (num === 1) {
			message.channel.send("Hello Sir");
		} else if (num === 2) {
			message.channel.send("Hey wazzup");
		} else if (num === 3) {
			message.channel.send("Hello there");
		} else if (num === 4) {
			message.channel.send("Howdy there");
		} else if (num === 5){
			message.channel.send("сука блять");
		} else if (num === 6){
			message.channel.send("Hello there!");
		} else if (num === 7){
			message.channel.send("Hola there sir");
		} else {
			message.channel.send("Aloha there buckaroo");
		}
	}

});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
