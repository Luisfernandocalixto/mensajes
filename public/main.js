$(function () {
    // socket
    var socket = io();

    // variables
    let message = $('#chat-message');
    let chat = $('#chat');
    message.focus();


    $('#message-box').submit(function (e) {
        e.preventDefault();
        // chat.append(message.val() + "<br/>");
        // console.log(chat);

        socket.emit('mensaje-del-cliente', message.val())
        message.val('');

    })

    socket.on('mensaje-del-servidor', function (data) {
        chat.append(data + "</br>" );

    })


})