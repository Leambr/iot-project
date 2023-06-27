const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");
// const userRouter = require("./routes/userRouter");
// const postRouter = require("./routes/postRouter");
// const authRouter = require("./routes/authRouter");
// const jwtHelper = require("./utils/helper/jwtHelper");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configure CORS
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// Routes
// app.get("", (_, res) => {
//   res.send("Hello expresssss!");
// });



const DB_HOST = 'localhost';
const DB_PORT = 6033;


const db = mysql.createPool({

  host: DB_HOST,
  port: DB_PORT,
  user: 'mysql-database',
  password: 'password',
  database: 'fitness-park-iot'
})


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


// app.use("/api", authRouter);
// // app.use("/api", jwtHelper.authenticateToken, userRouter, postRouter);
// app.use("/api", userRouter, postRouter);

app.listen(3123, () => {
  console.log("Server is up on port 3123");
});
