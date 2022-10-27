const express = require('express');
const productQueries = require('../db/items');
const router = express.Router();

// Get items route
router.get('/:restaurantId/items', (req, res) => {
  productQueries.getItemsByRestaurantID()
    .then((items) => {
      // res.render()
      // res.redirect()
      res.json(items);
    });
});

// GET food routes => /items/:id
// router.get('/:restaurantId/items', (req, res) => {
//   productQueries.getItemsById(req.params.id)
//     .then((items) => {
//       res.json(items);
//     });
// });


module.exports = router;

