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
	if ((message.content.includes("hello")) && !(message.author.bot)) {
		var num = getRandomInt(0, 6);
		if (num === 0) {
			message.channel.send("Hey!");
		} else if (num === 1) {
			message.channel.send("Hello!");
		} else if (num === 2) {
			message.channel.send("Hey, How's it going");
		} else if (num === 3) {
			message.channel.send("Hello there");
		} else if (num === 4) {
			message.channel.send("Howdy there");
		} else {
			message.channel.send("Aloha there buckaroo");
		}
	} //end of hello

});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
