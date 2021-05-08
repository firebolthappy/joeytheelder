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
			message.content.send("Hey!");
		} else if (num === 1) {
			message.content.send("Hello!");
		} else if (num === 2) {
			message.content.send("Hey, How's it going");
		} else if (num === 3) {
			message.content.send("Hello there");
		} else if (num === 4) {
			message.content.send("Howdy there");
		} else {
			message.content.send("Aloha there buckaroo");
		}
	} //end of hello

});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
