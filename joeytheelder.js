const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  // If the message is '!rip'
  if (message.content.includes("femboy")) {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.redd.it/wvko7o6fnsv61.jpg'); //femboy kye
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
