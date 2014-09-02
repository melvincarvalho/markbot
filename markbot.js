// Requires
var irc  = require('irc');


// Create the configuration
var config = {
	channels: ["#bitmark"],
	server: "irc.freenode.net",
	botName: "markbot"
};


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels
});


// Listen for any messages
bot.addListener("message", function(from, to, text, message) {

  console.log(message);

});


