module.exports = function(app) {
  var express = require('express');
  var systemDocumentRouter = express.Router();

  systemDocumentRouter.get('/', function(req, res) {
    res.send({
      'system/document': []
    });
  });

  systemDocumentRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  systemDocumentRouter.get('/:id', function(req, res) {
    res.send({
      'system/document': {
        id: req.params.id
      }
    });
  });

  systemDocumentRouter.put('/:id', function(req, res) {
    res.send({
      'system/document': {
        id: req.params.id
      }
    });
  });

  systemDocumentRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/system/documents', systemDocumentRouter);
};
