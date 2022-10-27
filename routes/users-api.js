/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


module.exports = function(router, database) {

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// // client main page
// router.get('/main', (req, res) => {
//   database.getAllRestaurants(req.query, 20)
//   .then(restaurants => res.send({restaurants}))
//   .catch(e => {
//     console.error(e);
//     res.send(e)
//   });
// });

// // items page
// router.get('/menuitems', (req, res) => {
//   database.getFood(req.query, 20)
//   .then(food => res.send({food}))
//   .catch(e => {
//     console.error(e);
//     res.send(e)
//   });
// });

}

