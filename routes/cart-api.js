const express = require('express');
const router  = express.Router();
const foodQueries = require('../db/queries/cart');


// show all the choosen foods
router.get('/', (req, res) => {
  const id = req.session.user_id;
  foodQueries.getFoods(id)
    .then((foods) => {
      res.json(foods);
    })
    .catch(err => {
      console.log(err.message);
    });

});

module.exports = router;
