var socket = io();

function evalAllBots() {
    var code = document.getElementsByName("evalme").value;
    socket.emit('broadcast-eval', code);
}
