const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client
let msgin = message.content.includes
let msgsnd = message.channel.send
var number = getRandomInt(6)

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  // If the message is '!rip'
	if ((msgin("hello")) && (message.author.bot)) {
		if number === 0 {
			msgsnd("Hey!");
		} else if number = 1 {
			msgsnd("Hello!");
		} else if number = 2 {
			msgsnd("Hey, How's it going");
		} else if number = 3 {
			msgnd("Hello there");
		} else if number = 4 {
			msgnd("Howdy there");
		} else if number = 5 {
			msgnd("Aloha there buckaroo")
		}
	} //end of hello

});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
