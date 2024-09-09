const io = require('socket.io');

module.exports = function (server) {

    var sockets = io.listen(server);
    sockets.on('connection', async function (socket) {
        console.log('nuevo cliente conectado');

        socket.on('mensaje-del-cliente', async function (data) {
            sockets.emit('mensaje-del-servidor', data)
        })
    })


}