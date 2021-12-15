const express = require ("express");
const app = express ();
const path = require ("path");

app.listen (3000, () => console.log ("Servidor corriendo en puerto 3000"));
app.use (express.static (path.resolve (__dirname, "./public")))

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/login.html'))})

app.get('/', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/index.html'))})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'views/register.html'))
})
app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'views/productDetail.html'))
})
app.get('/productcart', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'views/productCart.html'))
})