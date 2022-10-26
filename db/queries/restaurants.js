// const db = require('./connection');

// const getRestaurants = () => {
//   return db.query('SELECT * FROM restaurants;')
//     .then((response) => {
//       return response.rows;
//     });
// };

// const getRestaurantsById = (id) => {
//   return db.query('SELECT * FROM restaurants WHERE id = $1', [id])
//     .then((response) => {
//       return response.rows[0];
//     });
// };

// module.exports = {
//   getRestaurants,
//   getRestaurantsById
// };
