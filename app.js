import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './db.js';

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extend: true }));

app.get('/', (req, res) => {
  const q = 'SELECT COUNT(*) as count FROM users';
  connection.query(q, (error, result) => {
    if (error) throw error;
    const msg = `We have ${result[0].count} users`;
    // res.send(msg);
    res.render('index', { data: result[0].count });
  });
});

app.post('/register', (req, res) => {
  const user = {
    email: req.body.email,
  };
  connection.query('INSERT INTO users SET ?', user, function (err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(8080, () => {
  console.log('Server running on 8080');
});
