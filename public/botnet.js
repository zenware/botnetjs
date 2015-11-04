socket = io()

socket.on('eval', function(code) {
    var result = eval(code);
    socket.emit('client-eval', result)
})

socket.on('ping', function (data) {
    socket.emit('broadcast-pong', data)
})
