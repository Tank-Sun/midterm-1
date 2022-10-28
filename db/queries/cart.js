const db = require('../connection');

const getFoods = (id) => {
  return db.query(`
    SELECT order_details.*, menuitems.name, picture, price * quantity AS total_price
    FROM order_details
    JOIN orders ON orders.id = order_id
    JOIN clients ON clients.id = client_id
    JOIN menuitems ON menuitems.id = menuitem_id
    WHERE confirm = FALSE AND clients.id = $1
    ORDER BY order_details.id
  `, [id])
    .then(data => {
      return data.rows;
    });
};

const confirmOrder = () => {
  return db.query(`
    UPDATE orders
    SET confirm = TRUE, start_time = NOW()- interval '7 hour'
    WHERE confirm = FALSE
  `);
};

const editQuantity = (id, newQuantity) => {
  return db.query(`
    UPDATE order_details
    SET quantity = $2
    WHERE id = $1
  `, [id, newQuantity]);
};

const deleteFood = (id) => {
  return db.query(`
    DELETE FROM order_details WHERE id = $1
  `, [id]);
};

const getOrderNotification = () => {
  return db.query(`
    SELECT orders.id, start_time
    FROM orders
    WHERE confirm = TRUE AND ready = FALSE
    ORDER BY id DESC
    LIMIT 1
  `)
    .then(data => {
      return data.rows[0];
    });
};



module.exports = { getFoods, confirmOrder, deleteFood, editQuantity, getOrderNotification };
