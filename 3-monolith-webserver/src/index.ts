// require syntax => CJS (common js module)
// const express = require('express')

// MJS => Modules JS  ES Modules
import express from 'express';
import dotenv from 'dotenv';
// charger mes routes
import userRouter from './routes/users';
import indexRouter from './routes/index';
import todosRouter from './routes/todos';

// charger le fichier .env (a créer a la racine du projet)
dotenv.config();

// recuperer la var d'env. PORT
// chargée par dotenv dans le fichier .env
const port = process.env.PORT;

// creation du srv express
const app = express();

// config du srv (middlewares)
// global express configs
// app.use(....)
// router config
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/todos', todosRouter);


// lancer le srv
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
