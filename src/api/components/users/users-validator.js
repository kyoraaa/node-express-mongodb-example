const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      password_confirm: joi.string().min(6).max(32).required().label('password_confirm')
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldpassword: joi.string().min(6).max(32).required().label('old password'),
      newpassword: joi.string().min(6).max(32).required().label('new password'),
      confirmpassword: joi.string().min(6).max(32).required().label('confirm password')
    },
  },
};
