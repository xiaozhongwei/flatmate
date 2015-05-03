module.exports = function(app) {
  var express = require('express');
  var profileForgotPasswordRouter = express.Router();

  profileForgotPasswordRouter.get('/', function(req, res) {
    res.send({
      'profile/forgot-password': []
    });
  });

  profileForgotPasswordRouter.post('/', function(req, res) {
    res.send({});
    res.status(201).end();
  });

  profileForgotPasswordRouter.get('/:id', function(req, res) {
    res.send({
      'profile/forgot-password': {
        id: req.params.id
      }
    });
  });

  profileForgotPasswordRouter.put('/:id', function(req, res) {
    res.send({
      'profile/forgot-password': {
        id: req.params.id
      }
    });
  });

  profileForgotPasswordRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/forgotPasswords', profileForgotPasswordRouter);
};
