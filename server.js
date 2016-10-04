// Twilio Credentials
var accountSid = 'AC96ce2a5a8bd543a324809ee09baa8ed1';
var authToken = '[AuthToken]';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "2016162490",
    from: "+19103009728",
    body: "Hello this is yash chaturvedi",
}, function(err, message) {
    console.log(message.sid);
});