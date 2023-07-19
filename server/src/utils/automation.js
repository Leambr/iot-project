const crypto = require('crypto')
const client = require('../config/mqttConfig')

const tempAutomation = (data) => {
    const acNode = 'af1fb32d-5645-46a9-b7ad-afd9563725f1'

    const randomNum = crypto.randomBytes(4).readUInt32LE(0);
    const topic = `groupe5/request/${data.source_address}`;
    if(data.data.temperature > 38)
    {
        const message = JSON.stringify({
            cmd_id: randomNum,
            destination_address: acNode,
            ack_flags: 0,
            cmd_type: 203,
        });

        client.publish(topic, message);
        console.log('AC Up');
    }
    else if(data.data.temperature < 34)
    {
        const message = JSON.stringify({
            cmd_id: randomNum,
            destination_address: acNode,
            ack_flags: 0,
            cmd_type: 204,
        });

        client.publish(topic, message);
        console.log('AC Down');
    }
}

module.exports = {tempAutomation}