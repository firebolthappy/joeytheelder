const Discord = require("discord.js"); // imports the discord library
const client = new Discord.Client(); // creates a discord client

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', message => {
  // If the message is '!rip'
	if (((message.content.lowercase.includes("hello")) || (message.content.lowercase.includes("hey")) || (message.content.lowercase.includes("howdy")) || (message.content.lowercase.includes("how's it going")) || (message.content.lowercase.includes("what's up")) || (message.content.lowercase.includes("wassup")) || (message.content.lowercase.includes("hi"))) && !(message.author.bot)) { //HELLO
		var num = getRandomInt(0, 8);
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
	} else if (message.content.lowercase.includes("joey")){
		var num = getRandomInt(0, 17);
		if (num === 0) {
			message.channel.send("Does life have a purpose?");
		} else if (num === 1) {
			message.channel.send("I never understood until I started seeing ghosts lately");
		} else if (num === 2) {
			message.channel.send("Is there a god?");
		} else if (num === 3) {
			message.channel.send("Why are we here if we're just going to die?");
		} else if (num === 4) {
			message.channel.send("I died. I saw death. One day, you will as well.");
		} else if (num === 5) {
			message.channel.send("Please refrain from suicidal thoughts. Life is worth living.");
		} else if (num === 6) {
			message.channel.send("EEK");
		} else if (num === 7) {
			message.channel.send("Who are we to fear death?");
		} else if (num === 8) {
			message.channel.send("If you have been working in the funeral business for any period of time, you have always known that you will die, because I'm already gone,")
		} else if (num === 9) {
			message.channel.send("If you'd just taken the plane to somewhere where you were sure you'd feel better than you did here, like some peaceful, tropical island where your family, friends, and people you loved would have been waiting with a nice cold coolatta");
		} else if (num === 10) {
			message.channel.send("please. i cannot")
		} else if (num === 11) {
			message.channel.send("i am in pain")
		} else if (num === 12) {
			message.channel.send("help")
		} else if (num === 13) {
			message.channel.send("are you ok?")
		} else if (num === 14) {
			message.channel.send("My name is joey but do I have a purpose?")
		} else if (num == 15) {
      message.channel.send("сука блять")
    } else if (num == 16) {
      message.channel.send("ur mom")
    } else if (num == 17) {
      message.channel.send("joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden joe biden")
    }
	}

});

//https://i.redd.it/wvko7o6fnsv61.jpg
client.login(process.env.BOT_TOKEN);
