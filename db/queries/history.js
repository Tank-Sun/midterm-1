const db = require('../connection');

const getRecords = (id) => {
  return db.query(`
    SELECT orders.*
    FROM orders
    JOIN clients ON clients.id = client_id
    WHERE clients.id = $1 AND confirm = TRUE
    ORDER BY orders.id
  `, [id])
    .then(data => {
      return data.rows;
    });
};




module.exports = { getRecords };
