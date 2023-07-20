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

const lightAutomation = (data) => {
    const roomNode1 = {room : '9fa47c36-e52f-4698-b655-f7d5a8ce80a1', lightNode : 'ba1859b1-7c60-442d-803a-196d664bd70c'}
    const roomNode2 = {room : '82710134-af42-4601-a129-0975b48a0e5c', lightNode : '18f9c2e8-52bd-4921-ae63-f778df6dd7b3'}
    const roomNode3 = {room : 'dd943e23-4e89-4333-860e-c66483d3e624', lightNode : '97215733-8e88-4d93-b923-ae9c43de1ee8'}

    const randomNum = crypto.randomBytes(4).readUInt32LE(0);
    const topic = `groupe5/request/${data.source_address}`;
    let lightNode = ''
    if(data.data.motion <= 0)
    {
        if(data.source_address == roomNode1.room)
            lightNode = roomNode1.lightNode

        if(data.source_address == roomNode2.room)
            lightNode = roomNode2.lightNode
        
        if(data.source_address == roomNode3.room)
            lightNode = roomNode3.lightNode


        const message = JSON.stringify({
            cmd_id: randomNum,
            destination_address: lightNode,
            ack_flags: 0,
            cmd_type: 208,
        });

        client.publish(topic, message);
        console.log('Light Down');
    }
    else if(data.data.motion >= 1)
    {
        if(data.source_address == roomNode1.room)
            lightNode = roomNode1.lightNode

        if(data.source_address == roomNode2.room)
            lightNode = roomNode2.lightNode
        
        if(data.source_address == roomNode3.room)
            lightNode = roomNode3.lightNode

        const message = JSON.stringify({
            cmd_id: randomNum,
            destination_address: lightNode,
            ack_flags: 0,
            cmd_type: 207,
        });

        client.publish(topic, message);
        console.log('Light Up');
    }
}

module.exports = { tempAutomation , lightAutomation }