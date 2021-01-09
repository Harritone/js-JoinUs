import faker from 'faker';
import mysql from 'mysql';
import { mysqlPass } from './mysqlpass.js';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mysqlPass,
  database: 'join_us',
});

const q = 'SELECT CURTIME() AS time, CURDATE() as date, NOW() as now';
connection.query(q, (error, result, fields) => {
  if (error) throw error;
  console.log(result[0].time);
  console.log(result[0].date);
  console.log(result[0].now);
});
connection.end();
