const db = require('../connection');

db.query(`
SELECT orders.id, 
  `)
    .then(data => {
      console.log(data.rows);
    })
    .catch(err => {
      console.log(err.message);
    });

// SELECT order_detais.*, menuitems.name FROM order_detais
// JOIN orders ON orders.id = order_id
// JOIN clients ON clients.id = client_id
// JOIN menuitems ON menuitems.id = menuitem_id
// WHERE confirm = FALSE AND clients.id = 3;
