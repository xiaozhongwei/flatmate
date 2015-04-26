module.exports = function(app) {
  var express = require('express');
  var profileAccountRouter = express.Router();

  profileAccountRouter.get('/', function(req, res) {
    res.send({
      'profile/account': []
    });
  });

  profileAccountRouter.post('/', function(req, res) {
    res.send({});
    res.status(201).end();
  });

  profileAccountRouter.get('/:id', function(req, res) {
    res.send({
      'profile/account': {
        id: req.params.id
      }
    });
  });

  profileAccountRouter.put('/:id', function(req, res) {
    res.send({
      'profile/account': {
        id: req.params.id
      }
    });
  });

  profileAccountRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/accounts', profileAccountRouter);
};
