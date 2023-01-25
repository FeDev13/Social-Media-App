const express = require("express");
const server = express();



server.set('port', process.env.PORT || 9000);


server.listen(server.get('port'), ()=>{


console.log('corriendo en el puerto ', server.get('port'))


})