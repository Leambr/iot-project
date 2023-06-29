const express = require('express');
const morgan = require('morgan');
const db = require('./config/databaseConfig');
const app = express();
const port = 3123;
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const roomRouter = require("./routes/roomRouter");
const authRouter = require("./routes/authRouter");
const jwtHelper = require("./utils/helper/jwtHelper");
// const authRouter = require("./routes/authRouter");

app.use(morgan('dev')).use(express.json());

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );


app.get('/', (req, res) => res.send('Hello,Bidsflsdfghesdfcfy'));
app.use("/api", authRouter);
app.use("/api", jwtHelper.authenticateToken, userRouter, postRouter, roomRouter);

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
