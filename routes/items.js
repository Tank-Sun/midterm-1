const express = require('express');

const router = express.Router();

// Get food route
module.exports = (db) => {
  router.get("/", (request, response) => {
    const queryConfig = {
      text: `
      SELECT * FROM menuitems;
      `,
      values: []
    }

    db.query(queryConfig)
      .then((queryResponse) => {
        response.json(queryResponse.rows);
      })
  });
  return router;
};

