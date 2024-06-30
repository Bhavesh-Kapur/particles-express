const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const port = 3030;
const app = express();

app.use(express.static('routes/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'routes','views'));

app.get('/', (req,res)=>{
    res.render('index')
    })

app.listen(port, ()=>{
    console.log("Listen 3000");
})