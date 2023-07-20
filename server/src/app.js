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
const humidityRouter = require('./routes/humidityRouter');
const lightRouter = require('./routes/lightRouter');
const temperatureRouter = require('./routes/temperatureRouter');
const movingRouter = require('./routes/movingRouter');
const trainingCoursesRouter = require('./routes/trainingCoursesRouter');
const automationRouter = require('./routes/automationRouter');
const jwtHelper = require('./utils/helper/jwtHelper');
const cors = require('cors');

const mqtt = require('./mqtt');

app.use(morgan('dev')).use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: ['http://localhost'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
);

app.get('/', (_, res) => res.send('Hello,Bidsflsdfghesdfcfy'));
app.use('/api', authRouter);
app.use(
    '/api',
    userRouter,
    roomRouter,
    sensorRouter,
    co2Router,
    humidityRouter,
    lightRouter,
    temperatureRouter,
    movingRouter,
    trainingCoursesRouter,
    automationRouter
);

app.listen(port, () =>
    console.log(`Notre application Node est démarrée sur : http://localhost:${port}`)
);
