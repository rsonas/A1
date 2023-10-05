/*
    mongoose.js
    Aislinn Richardson 
    301146892
    09/14/23
*/

const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
    
    const db = mongoose.connect(config.db);

    return db;
}