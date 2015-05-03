module.exports = function(app) {
  var express = require('express');
  var profileResetPasswordRouter = express.Router();

  profileResetPasswordRouter.get('/', function(req, res) {
    res.send({
      'profile/reset-password': []
    });
  });

  profileResetPasswordRouter.post('/', function(req, res) {
    res.send({});
    res.status(201).end();
  });

  profileResetPasswordRouter.get('/:id', function(req, res) {
    res.send({
      'profile/reset-password': {
        id: req.params.id
      }
    });
  });

  profileResetPasswordRouter.put('/:id', function(req, res) {
    res.send({
      'profile/reset-password': {
        id: req.params.id
      }
    });
  });

  profileResetPasswordRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/resetPasswords', profileResetPasswordRouter);
};
