const net = require('net');
const client = net.connect({port: 3000,host: '192.168.1.51'}, () => {
        // 'connect' listener
        console.log('connected to server!');
client.write('샤방샤방!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});