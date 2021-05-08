const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client
let msgin = message.content.includes
let msgsnd = message.channel.send

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  // If the message is '!rip'

  if (msgin("femboy")) {
    msgsnd({file: 'https://i.redd.it/wvko7o6fnsv61.jpg'}); //femboy kye
  }
});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
