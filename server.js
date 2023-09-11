const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const HomeRoute = require('./routes/homeRoute');
const LoginRoute = require('./routes/loginRoute');
const UsuarioRoute = require('./routes/usuarioRoute');

const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout', './layout')


app.use(express.static("public/"))
app.use(ejsLayout);

app.use(express.urlencoded())
app.use(express.json());

let homeRota = new HomeRoute();
app.use('/', homeRota.router);
let loginRota = new LoginRoute();
app.use('/login', loginRota.router);
let usuarioRota = new UsuarioRoute();
app.use('/usuarios', usuarioRota.router);

app.listen('5000', function () {
    console.log("servidor web iniciado")
})