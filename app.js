const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');


const server = http.createServer(app);

// configuración del servidor
app.set('port', 3000);
app.use(morgan('dev'));

app.use(express.static(__dirname + "/public"));

// inicializacion del servidor
server.listen(app.get('port'), function () {
    console.log(`el servidor iniciado http://localhost:${app.get('port')}`)

})



// sockets
require('./sockets')(server)








