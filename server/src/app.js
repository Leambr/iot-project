const express = require('express');
const morgan = require('morgan');
const db = require('./config/databaseConfig');
const app = express();
const port = 3123;
const userRouter = require('./routes/userRouter');
const co2Router = require('./routes/co2Router');
const roomRouter = require('./routes/roomRouter');
const authRouter = require('./routes/authRouter');
const sensorRouter = require('./routes/sensorRouter');
const jwtHelper = require('./utils/helper/jwtHelper');

app.use(morgan('dev')).use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

app.get('/', (_, res) => res.send('Hello,Bidsflsdfghesdfcfy'));
app.use('/api', authRouter);
app.use('/api', jwtHelper.authenticateToken, userRouter, roomRouter, sensorRouter, co2Router);

// app.get('/api/users', (req, res) => {

//   res.setHeader('Content-Type', 'application/json');
//   const SelectQuery = 'SELECT * FROM users';
//   db.query(SelectQuery, (err, result) => {
//     console.log('/api/users');

//     if (err) {
//       console.log('if error', err);
//       res.send(err);
//     } else {
//       console.log('else result', result);
//       res.send(result);
//     }
//   });
// });

app.listen(port, () => 
    console.log(`Notre application Node est démarrée sur : http://localhost:${port}`)
);
