module.exports = function(app) {
  var express = require('express');
  var listingRoomPhotoRouter = express.Router();

  listingRoomPhotoRouter.get('/', function(req, res) {
    res.send({
      'listing/room-photo': []
    });
  });

  listingRoomPhotoRouter.post('/', function(req, res) {
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

  listingRoomPhotoRouter.get('/:id', function(req, res) {
    res.send({
      'listing/room-photo': {
        id: req.params.id
      }
    });
  });

  listingRoomPhotoRouter.put('/:id', function(req, res) {
    res.send({
      'listing/room-photo': {
        id: req.params.id
      }
    });
  });

  listingRoomPhotoRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/house/:id/photos/upload', listingRoomPhotoRouter);
};
