module.exports = function(app) {
  var express = require('express');
  var listingPhotoRouter = express.Router();

  listingPhotoRouter.get('/', function(req, res) {
    res.send({
      'listing/photo': []
    });
  });

  listingPhotoRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listingPhotoRouter.get('/:id', function(req, res) {
    res.send({
      'listing/photo': {
        id: req.params.id
      }
    });
  });

  listingPhotoRouter.put('/:id', function(req, res) {
    res.send({
      'listing/photo': {
        id: req.params.id
      }
    });
  });

  listingPhotoRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing-photo', listingPhotoRouter);
};
