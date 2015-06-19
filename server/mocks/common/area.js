module.exports = function(app) {
  var express = require('express');
  var commonAreaRouter = express.Router();

  commonAreaRouter.get('/', function(req, res) {
    res.send({
      'common/areas': [
        { id : "Bund Area", name: "Bund Area"},
        { id : "Expo Area", name: "Expo Area"},
        { id : "Gubei", name: "Gubei"}
      ]
    });
  });

  commonAreaRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  commonAreaRouter.get('/:id', function(req, res) {
    res.send({
      'common/area': {
        id: req.params.id
      }
    });
  });

  commonAreaRouter.put('/:id', function(req, res) {
    res.send({
      'common/area': {
        id: req.params.id
      }
    });
  });

  commonAreaRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/common/areas', commonAreaRouter);
};
