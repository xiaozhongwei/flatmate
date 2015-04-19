module.exports = function(app) {
  var express = require('express');
  var listingFlatmateRouter = express.Router();

  listingFlatmateRouter.get('/', function(req, res) {
    res.send({
      'listing/flatmate': []
    });
  });

  listingFlatmateRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listingFlatmateRouter.get('/:id', function(req, res) {
    res.send({
      'listing/flatmate': {
        id: req.params.id
      }
    });
  });

  listingFlatmateRouter.put('/:id', function(req, res) {
    res.send({
      'listing/flatmate': {
        id: req.params.id
      }
    });
  });

  listingFlatmateRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing/flatmates', listingFlatmateRouter);
};
