const { client } = require("../app/database/config");
const { users, departments } = require("../lib/placeholder-data.js");

async function seedDepartment(client) {
  try {
    const stmnt = `
        CREATE TABLE IF NOT EXISTS Department(
          id  SERIAL PRIMARY KEY ,
          name VARCHAR(30) NOT NULL UNIQUE
        );`;

    const createTable = await client.query(stmnt, []);

    console.log('Created "Department" table');

    const instmnt = `
        INSERT INTO Department(name)
        VALUES ($1)
        ON CONFLICT (name) DO NOTHING ;
       `;

    const insertDepartments = await Promise.all(
      departments.map((d) => client.query(instmnt, [d]))
    );

    console.log('Inserted "Department" table');

    return {
      createTable,
      departments: insertDepartments,
    };
  } catch (error) {
    console.error("Error seeding department", error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    const stmnt = `
        CREATE TABLE IF NOT EXISTS Users (
          uid SERIAL PRIMARY KEY ,
          fname VARCHAR(255) NOT NULL,
          lname VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          salary INT,
          role VARCHAR(255) NOT NULL,
          department_id INT,
          CONSTRAINT fk_dept 
          FOREIGN KEY (department_id) REFERENCES Department(id)
        ); 
      `;

    const createTable = client.query(stmnt);

    console.log(`Created "user" table`);

    const instmnt = `
    INSERT INTO Users (fname, lname, email, password, salary, role, department_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (email) DO NOTHING`;

    const insertedUsers = await Promise.all(
      users.map((user) =>
        client.query(instmnt, [
          user.fname,
          user.lname,
          user.email,
          user.password,
          user.salary,
          user.role,
          user.department_id,
        ])
      )
    );

    console.log(`Inserted "user" table`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  console.log(`Starting `);

  await seedDepartment(client);
  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error("Error occurred while attempting to seed the database:", err);
});
