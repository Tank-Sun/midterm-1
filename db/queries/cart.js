const db = require('../connection');

const getFoods = () => {
  return db.query(`
  SELECT order_detais.*, menuitems.name FROM order_detais
  JOIN orders ON orders.id = order_id
  JOIN clients ON clients.id = client_id
  JOIN menuitems ON menuitems.id = menuitem_id
  WHERE confirm = FALSE AND clients.id = 3;
  `)
    .then(data => {
      return data.rows;
    });
};



module.exports = { getFoods };
