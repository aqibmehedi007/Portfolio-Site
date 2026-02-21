const http = require('https');

const data = new URLSearchParams();
data.append('socket_id', '12345.67890');
data.append('channel_name', 'private-admin-channel');

const options = {
    hostname: 'aqibmehedi.com',
    port: 443,
    path: '/api/pusher/auth',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.toString().length
    }
};

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
});

req.write(data.toString());
req.end();
