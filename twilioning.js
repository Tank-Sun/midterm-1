const twilio = require('twilio');
const accountSid = 'ACe4735793404acb37b694294e32b1cefc'; // Your Account SID from www.twilio.com/console
const authToken = '69ba31e24a99f585cc3ed88fb74ba1d4'; // Your Auth Token from www.twilio.com/console


const client = new twilio(accountSid, authToken);
const sendMessageToClient = () => {
return client.messages
  .create({
    body: 'First one',
    to: '+12369678830', // Text this number
    from: '+14245445330', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};

const sendMessageToClientSecondTime = () => {
  return client.messages
    .create({
      body: 'Second one',
      to: '+12369678830', // Text this number
      from: '+14245445330', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  };

module.exports = { sendMessageToClient, sendMessageToClientSecondTime };
