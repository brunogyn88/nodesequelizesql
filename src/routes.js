const express = require('express');
const UserController = require('./Controllers/UserController');
const AddressController = require('./Controllers/AddressController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.post('/users/:user_id/addresses', AddressController.index);

module.exports = routes;