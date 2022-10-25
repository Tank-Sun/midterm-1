const db = require('../connection');

const getRecords = () => {
  return db.query(`
    SELECT orders.*
    FROM orders
    JOIN clients ON clients.id = client_id
    WHERE clients.id = 3 AND confirm = TRUE
    ORDER BY orders.id
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getRecords };
