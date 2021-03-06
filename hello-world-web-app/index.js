const express = require('express')
const os = require('os');
const app = express()
const port = 3000

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

app.get('/kill', (req, res) => {
    console.log(new Date(), 'Exit from application');
    process.exit();
});

app.listen(port, () => console.log(new Date(), `App listening on port ${port}!`));
