const mqtt = require('mqtt');
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MQTT_URL;
const options = {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
};

const client = mqtt.connect(url, options);

client.on('connect', () => {
    console.log('Connecté au broker MQTT');
});

client.on('error', (error) => {
    console.error('Erreur de connexion MQTT:', error);
});

module.exports = client;