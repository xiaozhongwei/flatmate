module.exports = function(app) {
  var express = require('express');
  var testRouter = express.Router();

  testRouter.get('/', function(req, res) {
    res.send({
      'test': []
    });
  });

  testRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  testRouter.get('/:id', function(req, res) {
    res.send({
      'test': {
        id: req.params.id
      }
    });
  });

  testRouter.put('/:id', function(req, res) {
    res.send({
      'test': {
        id: req.params.id
      }
    });
  });

  testRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/test', testRouter);
};
