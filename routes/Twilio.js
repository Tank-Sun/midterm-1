// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessageToOwner = (id, time) => {
  return client.messages
    .create({
      body: `You got a new order at ${time}. The order ID is ${id}.`,
      from: '+14634002509',
      to: '+15879301260'
    })
    .then(message => console.log(message.sid));
};

const sendTimeToClient = (time) => {
  return client.messages
    .create({
      body: `We received your order, it will be ready in about ${time} minutes.`,
      from: '+14634002509',
      to: '+15879301260'
    })
    .then(message => console.log(message.sid));
};

const sendMessageToClient = (address) => {
  return client.messages
    .create({
      body: `Your order is ready for pickup. Our address is ${address}.`,
      from: '+14634002509',
      to: '+15879301260'
    })
    .then(message => console.log(message.sid));
};

module.exports = { sendMessageToOwner, sendTimeToClient, sendMessageToClient };
