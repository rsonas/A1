/*
    index.server.routes.js
    Aislinn Richardson 
    301146892
    09/14/23
*/

var indexController = require('../controllers/index.server.controller');

module.exports = function(app) {    

    // Defines routes
    app.get('/', indexController.renderHomePage);
    app.get('/about', indexController.renderAboutMePage);
    app.get('/services', indexController.renderServicesPage);
    app.get('/contact', indexController.renderContactMePage);
    app.get('/projects', indexController.renderProjectsPage);
};