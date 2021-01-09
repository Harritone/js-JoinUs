import faker from 'faker';
import mysql from 'mysql';
import { mysqlPass } from './mysqlpass.js';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mysqlPass,
  database: 'join_us',
});

// Selecting DATA
// const q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, (error, result, fields) => {
//   if (error) throw error;
//   console.log(result[0].total);
// });

// Inserting data

const users = [];

for (let i = 0; i < 500; i++) {
  users.push([faker.internet.email(), faker.date.past()]);
}
console.log(users.length);
const q = 'INSERT INTO users(email, created_at) VALUES ?';

connection.query(q, [users], (error, result) => {
  console.log(error);
  console.log(result);
});
connection.end();
