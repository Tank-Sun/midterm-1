const express = require('express');
const router  = express.Router();
const foodQueries = require('../db/queries/cart');
const Twilio = require('./Twilio');


// show all the choosen foods
router.get('/', (req, res) => {
  res.render('cart');
});

// edit the quantity
router.post('/:id', (req, res) => {
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
router.post('/:id/delete', (req, res) => {
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
      Twilio.sendMessage()
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err.message);
    });
});


module.exports = router;
