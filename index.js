const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});