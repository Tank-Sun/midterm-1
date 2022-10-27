/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const orderQueries = require('../db/queries/restaurantItems');


router.use((req, res, next) => {

  console.log('inside client router');

  next();
});

//main page
//GET restaurants list of items/
router.get('/', (req, res) => {
  const query = `SELECT *
  FROM menuitems
  ;`;
  // console.log(query);
  db.query(query)
    .then(data => {
      const items = data.rows;
      console.log(items);
      const templateVars = {urls:items};
      // res.json(items);
      res.render("restaurant-items", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET /restaurants  items/:id
router.get('/:id', (req, res) => {
  db.query(`SELECT *
  FROM menuitems
  WHERE menuitems.id = $1;`,[req.params.id])
    .then(data => {
      const items = data.rows[0];
      console.log(items);
      const templateVars = { items: items};
      console.log('templateVars',templateVars);
      // res.json(items);
      res.render("items", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//Select item, add to cart
//Edit  POST /:id
router.post('/:id', (req, res) => {
  orderQueries.checkCart()
    .then((result) => {
      console.log('result:', result);
      if (!result) {
        orderQueries.createOrder();
      }

      db.query(`
      INSERT INTO order_details (order_id, menuitem_id, quantity)
      VALUES ((SELECT orders.id
      FROM orders
      JOIN clients ON client_id = clients.id
      WHERE clients.id = 1 AND confirm = FALSE), $2, $1);`,[req.body.Quantity, req.params.id])
    })
    .then(() => {
      // console.log(data.rows);
      res.redirect(`/restaurant`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
});


module.exports = router;
