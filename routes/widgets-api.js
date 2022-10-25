/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  console.log('inside owner11 router');

  next();
});

//owner
//GET restaurants orders/
router.get('/', (req, res) => {
  const query = `SELECT orders.id, clients.name, start_time, end_time, ready
  FROM orders
  JOIN clients ON clients.id = client_id;`;
  console.log(query);
  db.query(query)
    .then(data => {
      const widgets = data.rows;
      res.json(widgets );
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// GET /restaurants  orders/:id/
router.get('/:id', (req, res) => {
  const query = `SELECT orders.id, clients.name, start_time, end_time, ready
  FROM orders
  JOIN clients ON clients.id = client_id
  WHERE orders.id = $1;`;
  console.log(query);
  db.query(query,[req.params.id])
    .then(data => {
      const widgets = data.rows[0];
      res.json(widgets );
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//take the order, start cooking
//Edit  POST /orders/:id





//finish the order
//Delete  POST/orders/:id/delete


////login
//app.get('/login/:id', (req, res) => {
//  // using encrypted cookies
//  req.session.user_id = req.params.id;

//  // or using plain-text cookies
//  res.cookie('user_id', req.params.id);

//  // send the user somewhere
//  res.redirect('/');
//});

module.exports = router;
