const express = require('express');
const morgan = require('morgan');
const db = require('./config/databaseConfig');
const app = express();
const port = 3123;

app.use(morgan('dev')).use(express.json());

app.get('/', (req, res) => res.send('Hello,Billy'));

app.get('/api/users', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const SelectQuery = 'SELECT * FROM users';
    db.query(SelectQuery, (err, result) => {
        console.log('pas rentré dans l et ouiiii else');

        if (err) {
            console.log('if error', err);
            res.send(err);
        } else {
            console.log('else result', result);
            res.send(result);
        }
    });
});

app.listen(port, () =>
    console.log(`Notre application Node est démarrée sur : http://localhost:${port}`)
);
