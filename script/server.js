const express = require('express')
const server = express()

server.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})


server.listen(3001,'localhost',() =>{
    console.log('Server UP')
    console.log('To turn off press Ctrl + C')
})