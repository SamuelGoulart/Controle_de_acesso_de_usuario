const routes = require("express").Router();

const userController = require("./controllers/users");
const sessionController = require("./controllers/sessions");
const permissionsController = require("./controllers/permissions");
const rolesController = require("./controllers/roles");


routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);
routes.post('/permissions', permissionsController.store);
routes.post('/roles', rolesController.store);


module.exports = routes;
