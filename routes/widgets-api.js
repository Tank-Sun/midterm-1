/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const Twilio = require('./Twilio');

router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  console.log('inside owner router');
  next();
});

//owner
//GET restaurants orders/
router.get('/', (req, res) => {
  const query = `SELECT orders.id, clients.name, start_time, end_time, confirm, ready
  FROM orders
  JOIN clients ON clients.id = client_id
  WHERE confirm = TRUE AND start_time > '2022-10-27T00:00:00.000Z'
  ORDER BY ready, start_time DESC
  ;`;

  db.query(query)
    .then(data => {
      const widgets = data.rows;
      const templateVars = {urls:widgets};
      res.render("restaurantOrders", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET /restaurants  orders/:id/
router.get('/:id', (req, res) => {
  db.query(`SELECT orders.id, clients.name as client_name , start_time, end_time, ready, menuitems.name, menuitems.description, menuitems.picture, menuitems.vegetarian, quantity
  FROM orders
  JOIN clients ON clients.id = client_id
  JOIN order_details ON order_id = orders.id
  JOIN menuitems ON menuitem_id = menuitems.id
  WHERE orders.id = $1
  ORDER BY menuitem_id;`,[req.params.id])
    .then(data => {
      const widgets = data.rows;
      const templateVars = { order: widgets};
      res.render("restaurantOrderDetails", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//take the order, start cooking
//Edit  POST /orders/:id
router.post('/:id', (req, res) => {
  return db.query(`UPDATE orders
  SET end_time = start_time + $1
  WHERE orders.id = $2
  RETURNING *;`,[req.body.fulfillTime*60, req.params.id])
    .then(() => {
      const time = req.body.fulfillTime;
      // console.log("time:", time);
      Twilio.sendTimeToClient(time);
    })
    .then(() => {
      // console.log(data.rows);
      res.redirect(`/api/widgets`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
});

//finish the order
//Delete  POST/orders/:id/delete
router.post('/:id/delete', (req, res) => {
  return db.query(`
  UPDATE orders
SET ready = TRUE,end_time = now()- interval '7 hour'
  WHERE orders.id = $1
  RETURNING *;`,[req.params.id])
    .then((data) => {
      res.redirect(`/api/widgets`);
    })
    .then(() => {
      return db.query(`
        SELECT location
        FROM restaurants
        WHERE id = 1
      `)
    })
    .then(location => {
      return location.rows[0];
    })
    .then((location) => {
      const address = location.location;
      Twilio.sendMessageToClient(address);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
});


module.exports = router;
