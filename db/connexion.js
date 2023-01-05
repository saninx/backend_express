/** @format */

const { Pool, Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const client = new client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

module.exports = connection;
