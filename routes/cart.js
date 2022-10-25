const express = require('express');
const router  = express.Router();
const foodQueries = require('../db/queries/cart');


// show all the choosen foods
router.get('/', (req, res) => {
  foodQueries.getFoods()
    .then((foods) => {
      const templateVars = { foods: foods };
      res.render('cart', templateVars);
      // res.json(foods);
      // res.send({foods});
    })
    .catch(err => {
      console.log(err.message);
    });

});

module.exports = router;
