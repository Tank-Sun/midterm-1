const db = require('../connection');

const checkCart = () => {
  return db.query(`
    SELECT orders.id
    FROM orders
    JOIN clients ON clients.id = client_id
    WHERE clients.id = 1 AND confirm = FALSE
  `)
    .then(data => {
      return data.rows.length;
    });
};

const createOrder = () => {
  return db.query(`
    INSERT INTO orders (client_id, ready, confirm)
    VALUES(1, FALSE, FALSE)
  `);
};

module.exports = { checkCart, createOrder };
