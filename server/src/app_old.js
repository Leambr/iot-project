'use strict';

import express from 'express';
import { createPool } from 'mysql2';
import cors from "cors";

// Constants
const PORT = 3124;
const HOST = '127.0.0.1';

const DB_HOST = 'localhost';
const DB_PORT = 6033;

const db = createPool({

    host: DB_HOST,
    port: DB_PORT,
    user: 'mysql-database',
    password: 'password',
    database: 'fitness-park-iot'
})

// App
const app = express();

app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.get('/', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    const SelectQuery = "SELECT * FROM users";
    db.query(SelectQuery, (err, result) => {

        console.log('ici');

        if (err) {

            console.log(err);
            res.send(err);
        } else {

            console.log(result);
            res.send(result);
        }
        console.log('ici');
    })
})

// app.get('/', (req, res) => {
//     res.send('Hello Worlddddddd');
// });

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
