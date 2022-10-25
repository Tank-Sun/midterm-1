const express = require('express');
const router  = express.Router();

// show all the order records
router.get('/', (req, res) => {
  res.render('history');
});

module.exports = router;
