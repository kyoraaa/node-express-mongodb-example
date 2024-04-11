const express = require('express');

const authentication = require('./components/authentication/authentication-route');
const users = require('./components/users/users-route');

//utk nambahin endpoint disini, buat routenya

module.exports = () => {
  const app = express.Router();

  authentication(app);
  users(app);

  return app;
};
