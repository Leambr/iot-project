// import express from 'express';
const express = require('express');
const mqtt = require('mqtt');
const crypto = require('crypto');

const brokerUrl = 'mqtt://mqtt.arcplex.fr:2295';
const options = {
    username: 'groupe5',
    password: 'jCE4S04lbAnZ',
};

const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
    console.log('Connecté au broker MQTT');

    const topic = 'groupe5/#'; // '#' pour correspondre à tous les sous-sujets du groupe 5
    client.subscribe(topic);
});

let test = [];

// client.on('message', (topic, message) => {
//     if (topic.startsWith('groupe5/packet')) {
//         const data = JSON.parse(message.toString());
//         let date =
//             new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
//         console.log(date, ' Message reçu:', topic, data);
//         test.push(data);
//     }
// });

client.on('error', (error) => {
    console.error('Erreur de connexion MQTT:', error);
});

// Constants
const PORT = 3123;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.send(test);
});

app.get('/test', (req, res) => {
    const randomNum = crypto.randomBytes(4).readUInt32LE(0);
    const topic = 'groupe5/request/82710134-af42-4601-a129-0975b48a0e5c';

    const message = JSON.stringify({
        cmd_id: randomNum,
        destination_address: '18f9c2e8-52bd-4921-ae63-f778df6dd7b3',
        ack_flags: 0,
        cmd_type: 207,
    });

    client.publish(topic, message);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
