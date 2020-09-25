const express = require ('express');
const app = express (); 
const path = require('path');



app.get('/', function(req,res){ 
    let file= path.resolve('html/index.html')
    res.sendFile(file)
})

app.get('/register', function(req,res){ 
    let file= path.resolve('html/register.html')
    res.sendFile(file)
})

app.get('*', function(req,res){ 
    if (req.url.endsWith('.css')){
    let file= path.resolve('html/vistas'+ req.url)
    return res.sendFile(file)
    }

let images = ['jpg', 'jepg', 'gif', 'png', 'svg']
let ext =req.url.split ('.')[1]

if (images.includes(ext)){ 
    let file = path.resolve('./Html/vistas'+ req.url)
    return res.sendFile(file)
}}
)





app.listen(3030, ()=> console.log ('Servidor Funcionando'));
