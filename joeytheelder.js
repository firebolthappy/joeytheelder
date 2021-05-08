const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client
let msgin = message.content.includes
let msgsnd = message.channel.send
var num = 0;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  // If the message is '!rip'
	if ((msgin("hello")) && (message.author.bot)) {
		num = genRandomInt(6);
		if (num === 0) {
			msgsnd("Hey!");
		} else if (num === 1) {
			msgsnd("Hello!");
		} else if (num === 2) {
			msgsnd("Hey, How's it going");
		} else if (num === 3) {
			msgnd("Hello there");
		} else if (num === 4) {
			msgnd("Howdy there");
		} else {
			msgnd("Aloha there buckaroo");
		}
	} //end of hello

});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
