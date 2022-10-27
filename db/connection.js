// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};



const db = new Pool(dbParams);

db.connect(() => {
  console.log('connected to database');
});

module.exports = db;
