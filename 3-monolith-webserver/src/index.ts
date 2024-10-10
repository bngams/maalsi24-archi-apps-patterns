// require syntax => CJS (common js module)
// const express = require('express')

// MJS => Modules JS  ES Modules 
import express from "express";

// creer le srv web
const app = express();

// config le srv web, et mes traitements
app.get('/', (req, res) => {
    res.send('Hello from my app!');
})

// lancer le srv (lancer l'app)
app.listen(3000, () => {
    console.info('App started on 3000');
});
