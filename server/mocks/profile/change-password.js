module.exports = function(app) {
  var express = require('express');
  var profileChangePasswordRouter = express.Router();

  profileChangePasswordRouter.get('/', function(req, res) {
    res.send({
      'profile/change-password': []
    });
  });

  profileChangePasswordRouter.post('/', function(req, res) {
    res.send({
      'profile/change-password': {
        id: 1
      }
    });
    res.status(201).end();
  });

  profileChangePasswordRouter.get('/:id', function(req, res) {
    res.send({
      'profile/change-password': {
        id: req.params.id
      }
    });
  });

  profileChangePasswordRouter.put('/:id', function(req, res) {
    res.send({
      'profile/change-password': {
        id: req.params.id
      }
    });
  });

  profileChangePasswordRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/changePasswords', profileChangePasswordRouter);
};
