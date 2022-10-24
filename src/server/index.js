const express = require('express');
const app = express();
const path = require('path');
const os = require('os');
const port = process.env.PORT || 8080;

app.use('/static', express.static(path.resolve(__dirname, '../../dist')));

// Gets username info based on OS of machine
app.get('/api/getName', (req, res) => {
    res.send({ name: os.userInfo().username});
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
})

if(process.env.NODE_ENV === 'production') {
    app.use('/static', express.static(path.resolve(__dirname, '../../dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
    })
}

app.listen(port, () => console.log('Listening on port 8080'));