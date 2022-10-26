const express = require('express');
const productQueries = require('../db/restaurants');
const router = express.Router();

// Get restaurants/main page route
router.get('/', (req, res) => {
  productQueries.getRestaurants()
    .then((items) => {
      // res.render()
      // res.redirect()
      res.json(items);
    });
});

// GET food routes => /items/:id
router.get('/items/:id', (req, res) => {
  productQueries.getItemsById(req.params.id)
    .then((items) => {
      res.json(items);
    });
});
