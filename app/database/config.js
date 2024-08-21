const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "hrm_db",
});

async function connect() {
  try {
    await client.connect();
    // console.log("Connected");
  } catch (error) {
    console.error("Error in connecting to DataBase : ", error.stack);
  }
}

connect();

module.exports = { client };
