module.exports = function(app) {
  var express = require('express');
  var listingFlatmateRouter = express.Router();

  listingFlatmateRouter.get('/', function(req, res) {
    res.send({
      'listing/flatmate': []
    });
  });

  listingFlatmateRouter.post('/', function(req, res) {
    res.send({
      'listing/flatmate': {
        id: (new Date()).getTime(),
        listingId: (new Date()).getTime(),
        status: 0
      }
    });
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
    res.send({});
    res.status(204).end();
  });

  app.use('/api/listing/flatmates', listingFlatmateRouter);
};
