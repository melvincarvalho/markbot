// Requires
var irc  = require('irc');

// Init
var botName = 'markbot';
var channel = '#bitmark';
var duration = 30000;
var joinMessage = 'Greetings, I am markbot.  Just popping in briefly, to look around.';
var partMessage = "So long, until next time.  I'll be back!";


// Create the configuration
var config = {
  channels: [channel],
  server: "irc.freenode.net",
  botName: botName,
  autoconnect: true
};


// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});


// Join message
bot.addListener("join", function(channel, nick, message) {
  bot.say(channel, joinMessage);
});

// Listen for any messages
bot.addListener("message", function(from, to, text, message) {
  console.log(message);
});

// part
setTimeout(part, duration);
function part() {
  bot.say(config.channels[0], partMessage);
  bot.part(config.channels[0], partMessage, function(){ 
    console.log("Exiting");
    process.exit(0);
  });
}
