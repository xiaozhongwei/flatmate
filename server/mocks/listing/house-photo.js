module.exports = function(app) {
  var express = require('express');
  var listingPhotoRouter = express.Router();

  listingPhotoRouter.get('/', function(req, res) {
    res.send({
      'listing/photo': []
    });
  });

  listingPhotoRouter.post('/', function(req, res) {
    var data = {
      'listing/photos': [{
        id: Math.ceil(Math.random() * 1000),
        index: 1,
        imageUrl: 'images/post-5.jpg'
      },{
        id: Math.ceil(Math.random() * 1000),
        index: 2,
        imageUrl: 'images/post-5.jpg'
      },{
        id: Math.ceil(Math.random() * 1000),
        index: 3,
        imageUrl: 'images/post-5.jpg'
      }]
    };
    res.send(data);
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

  app.use('/api/house/:id/photos/upload', listingPhotoRouter);
};
