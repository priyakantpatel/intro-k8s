const express = require('express')
const os = require('os');
const app = express()
const port = 3000
let healthy = true;

app.get('/', (req, res) => {
    console.log(new Date(), 'Hello World!');
    res.send({ msg: 'Hello World!', serverTime: new Date(), hostname: os.hostname() });
});

app.get('/theme', (req, res) => {
    console.log(new Date(), 'Get theme value from environment variable');
    const themeValue = process.env.theme || 'Please define theme environment variable'
    console.log(new Date(), 'themeValue: ', themeValue);
    res.send({ themeValue: themeValue, serverTime: new Date() });
});

app.get('/health', (req, res) => {
    console.log(new Date(), 'Check service health');
    if (healthy)
        res.send({ msg: 'Service is healthy!', serverTime: new Date() });
    else
        res.send({ msg: 'Service is not healthy!', serverTime: new Date() });
});

app.get('/set-unhealthy', (req, res) => {
    console.log(new Date(), 'set-unhealthy');
    healthy = false;
    res.send({ msg: 'Set unhealthy success!', serverTime: new Date() });
});

app.get('/set-healthy', (req, res) => {
    console.log(new Date(), 'set-healthy');
    healthy = true;
    res.send({ msg: 'Set healthy success!', serverTime: new Date() });
});

app.get('/kill', (req, res) => {
    console.log(new Date(), 'Exit from application');
    process.exit();
});

app.listen(port, () => console.log(new Date(), `App listening on port ${port}!`));
