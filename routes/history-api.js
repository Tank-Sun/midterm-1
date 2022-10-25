const express = require('express');
const router  = express.Router();
const historyQueries = require('../db/queries/history');


// show all the order history
router.get('/', (req, res) => {
  const id = req.session.user_id;
  historyQueries.getRecords(id)
    .then((records) => {
      res.json(records);
    })
    .catch(err => {
      console.log(err.message);
    });

});

module.exports = router;
