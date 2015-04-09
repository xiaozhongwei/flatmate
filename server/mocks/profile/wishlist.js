module.exports = function(app) {
  var express = require('express');
  var profileWishlistRouter = express.Router();

  profileWishlistRouter.get('/', function(req, res) {
    res.send({
      'profile/wishlists': [
        {
          id: 1,
          listings: [{
            id: "1",
            title: "舒适向南单间",
            photos: [{id: "11", index:0, downloadFilePath:"images/post-5.jpg"}],
            status: 0
          }]
        }
      ]
    });
  });

  profileWishlistRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  profileWishlistRouter.post('/remove', function(req, res) {
    res.status(201).end();
  });

  profileWishlistRouter.get('/:id', function(req, res) {
    res.send({
      'profile/wishlist': {
        id: req.params.id
      }
    });
  });

  profileWishlistRouter.put('/:id', function(req, res) {
    res.send({
      'profile/wishlist': {
        id: req.params.id

      }
    });
  });

  profileWishlistRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/wishlists', profileWishlistRouter);
};
