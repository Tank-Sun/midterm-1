const express = require('express');
const router  = express.Router();
const foodQueries = require('../db/queries/cart');
const Twilio = require('./Twilio');


// show all the choosen foods
router.get('/', (req, res) => {
  res.render('cart');
});

// edit the quantity
router.patch('/:id', (req, res) => {
  const newQuantity = req.body.newQuantity;
  foodQueries.editQuantity(req.params.id, newQuantity)
    .then(() => {
      res.redirect('/foods');
    })
    .catch(err => {
      console.log(err.message);
    });
});

// delete one kinds of food
router.delete('/:id/delete', (req, res) => {
  foodQueries.deleteFood(req.params.id)
    .then(() => {
      res.redirect('/foods');
    })
    .catch(err => {
      console.log(err.message);
    });
});

// confirm the order
router.post('/', (req, res) => {
  foodQueries.confirmOrder()
    .then(() => {
      return foodQueries.getOrderNotification();
    })
    .then((orderInformation) => {
      const id = orderInformation.id;
      const time = orderInformation.start_time.toLocaleString('en-GB', { timeZone: 'UTC' });
      Twilio.sendMessageToOwner(id, time);
    })
    .then(() => {
      res.redirect('/restaurant');
    })
    .catch(err => {
      console.log(err.message);
    });
});


module.exports = router;
