const { Client } = require("pg");

const client = new Client({
  user: "admin",
  host: "localhost",
  database: "artelazer",
  port: 5432
});

module.exports = client;
