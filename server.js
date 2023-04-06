const express = require('express');
const app= express();
const server = require('http').Server(app);
const {v4:uuid}=require('uuid');


app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/',(reg,res)=>{
    res.redirect(`/${uuid()}`);
})

app.get('/:room', (req,res)=>{
    res.render('room',{roomId:req.params.room});
})


server.listen(3030); 