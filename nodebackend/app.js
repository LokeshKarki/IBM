
const express = require('express')
const app = express()
const port = 3000

const server = app.listen(3000,()=>{
    console.log('Started in 3000')
});

const io = socket(server)

io.socketr.on('connection', (socket)=>{
    console.log(`new connection id: ${socket.id}`);
    sendData(socket);
})


function sendData(socket){
    
    if(x){
        socket.emit('data1', Array.from({length: 8}, () => Math.floor(Math.random() * 590)+ 10));
        x = !x;
    }else{
        socket.emit('data2', Array.from({length: 8}, () => Math.floor(Math.random() * 590)+ 10));
        x = !x;
    }
    console.log(`data is ${x}`);
    setTimeout(() => {
        sendData(socket);
    }, 3000);
}