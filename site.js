const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0';
const site = express();
const path = require('path');

site.use(express.static(path.join(__dirname, 'public')));



site.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
});

site.listen(PORT, HOST, ()=>{
    console.log('Site UP');
})