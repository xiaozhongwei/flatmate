module.exports = function(app) {
  var express = require('express');
  var commonCompoundRouter = express.Router();

  commonCompoundRouter.get('/', function(req, res) {
    res.send({
      'common/compounds': [
        {
          id: 1,
          name: '瑞虹新城',
          address: '临平路212号',
          area:'虹口',
          xCoordinate: '',
          yCoordinate: '',
          metroStations: ["Anshan Xincun"]
        },
        {
          id: 2,
          name: '静安豪景',
          address: '四川北路',
          area:'虹口',
          xCoordinate: '',
          yCoordinate: '',
          metroStations: ["Anshan Xincun"]
        }
      ]
    });
  });

  commonCompoundRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  commonCompoundRouter.get('/:id', function(req, res) {
    res.send({
      'common/compound': {
        id: req.params.id,
        name: '瑞虹新城',
        address: '临平路212号',
        area:'Hongkou',
        xCoordinate: '',
        yCoordinate: '',
        metroStations: ["Anshan Xincun"]
      }
    });
  });

  commonCompoundRouter.put('/:id', function(req, res) {
    res.send({
      'common/compound': {
        id: req.params.id
      }
    });
  });

  commonCompoundRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/common/compounds', commonCompoundRouter);
};
