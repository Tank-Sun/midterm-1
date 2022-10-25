const express = require('express');
const router  = express.Router();
const foodQueries = require('../db/queries/cart');


// show all the choosen foods
router.get('/', (req, res) => {
  foodQueries.getFoods()
    .then((foods) => {
      const templateVars = { foods: foods };
      res.render('cart', templateVars);
    })
    .catch(err => {
      console.log(err.message);
    });
});

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

router.post('/:id/delete', (req, res) => {
  foodQueries.deleteFood(req.params.id)
    .then(() => {
      res.redirect('/foods');
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.post('/', (req, res) => {
  foodQueries.confirmOrder()
    .then(() => {

      res.redirect('/');
    })
    .catch(err => {
      console.log(err.message);
    });
});


module.exports = router;
