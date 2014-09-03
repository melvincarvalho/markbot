// Requires
var irc  = require('irc');
var bitcore  = require('./bitcore/');

// Init
var Address = bitcore.Address;
var botName = 'markbot';
var channel = '#bitmark';
var duration = 30000;

var amount = 2;
var currency = '₥';

var joinMessage = 'Greetings, I am markbot.  I have ' + amount + '' + currency + ' to give away to the first person to post a valid account address!';
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
  var m = message.args[1];
  var a = new Address(m);
  console.log(m + ' ' +a.isValid()); 
  console.log(message);
  if (a.isValid()) {
    var successMessage = 'Congratulations, we have a winner!  ' + amount + '' + currency + ' will be sent to : ' + m;
    bot.say(config.channels[0], successMessage);
    part();
  }
});

// part
function part() {
  bot.say(config.channels[0], partMessage);
  bot.part(config.channels[0], partMessage, function(){ 
    console.log("Exiting");
    process.exit(0);
  });
}
