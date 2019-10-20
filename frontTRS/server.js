const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/build'));

const server = app.listen(8081, () => {

    const host = '127.0.0.1';
    const port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

// ===========  Includes  =================
app.use('/', express.static(__dirname));
app.use('/stylesheet', express.static(__dirname + '/public/stylesheet/'));
app.use('/script', express.static(__dirname + '/public/script/'));
app.use('/images', express.static(__dirname + '/public/img/'));
app.use('/workbox', express.static(__dirname + '/node_modules/workbox-sw/build/workbox-sw.js'))

// ============  Routes  ==================
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});
