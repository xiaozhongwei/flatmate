module.exports = function(app) {
  var express = require('express');
  var credentialsRouter = express.Router();

  credentialsRouter.get('/', function(req, res) {
    res.send({
      'credentials': []
    });
  });

  credentialsRouter.post('/', function(req, res) {
    res.send({
      "id":"1234",
      "access_token":"2YotnFZFEjr1zCsicMWpAA",
      "token_type":"bearer"
    });
    res.status(201).end();
  });

  credentialsRouter.get('/:id', function(req, res) {
    res.send({
      'credentials': {
        id: req.params.id
      }
    });
  });

  credentialsRouter.put('/:id', function(req, res) {
    res.send({
      'credentials': {
        id: req.params.id
      }
    });
  });

  credentialsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/token', credentialsRouter);
};
