const express = require('express');
const router  = express.Router();
const historyQueries = require('../db/queries/history');


// show all the order history
router.get('/', (req, res) => {
  historyQueries.getRecords()
    .then((records) => {
      res.json(records);
    })
    .catch(err => {
      console.log(err.message);
    });

});

module.exports = router;
