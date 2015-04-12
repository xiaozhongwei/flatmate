module.exports = function(app) {
  var express = require('express');
  var listingStatisticRouter = express.Router();

  listingStatisticRouter.get('/', function(req, res) {
    res.send({
      'listing/statistics': [{
        id: 1,
        type: "All",
        count: 50
      },{
        id: 2,
        type: "Listed",
        count: 30
      },{
        id: 3,
        type: "Unlisted",
        count: 20
      }]
    });
  });

  listingStatisticRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listingStatisticRouter.get('/:id', function(req, res) {
    res.send({
      'listing/statistic': {
        id: req.params.id
      }
    });
  });

  listingStatisticRouter.put('/:id', function(req, res) {
    res.send({
      'listing/statistic': {
        id: req.params.id
      }
    });
  });

  listingStatisticRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing/statistics', listingStatisticRouter);
};
