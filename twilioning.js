const twilio = require('twilio');
const accountSid = 'ACe4735793404acb37b694294e32b1cefc'; // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console


const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+12369678830', // Text this number
    from: '+14245445330', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
