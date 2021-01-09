import express from 'express';
import { connection } from './db.js';

const app = express();

app.get('/', (req, res) => {
  const q = 'SELECT COUNT(*) as count FROM users';
  connection.query(q, (error, result) => {
    if (error) throw error;
    const msg = `We have ${result[0].count} users`;
    res.send(msg);
  });
});

app.listen(8080, () => {
  console.log('Server running on 8080');
});
