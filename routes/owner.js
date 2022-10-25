/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
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

//GET restaurants/
router.get('/', (req, res) => {
  db.query(`SELECT orders.id, clients.name, start_time, end_time, ready
  FROM orders
  JOIN clients ON clients.id = client_id;`)
  .then((response) => {
     const order = response.rows;
     res.json(order)
    //res.render('restaurant', { id: process.env.ID });
  })
  .catch(err => {
    console.log("catch:",err.message);
  });
});


// GET /orders/:id/
router.get('/:id', (req, res) => {
  db.query(`SELECT orders.id, clients.name, start_time, end_time, ready
  FROM orders
  JOIN clients ON clients.id = client_id
  WHERE orders.id = $1;`, [req.params.id])
    .then((response) => {
      const order = response.rows[0];
      res.json(order);
    })
    .catch(err => {
      console.log("catch:",err.message);
    });
});




//# Owner
//## orders list
//see all the orders
//Browse  GET  /orders

//choose one order
//Read  GET  /orders/:id

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
