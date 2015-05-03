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
            photos: [{id: "11", index:0, imageUrl:"images/post-5.jpg"}],
            status: 0,
            rentType: "share",
            perSixMonthPrice: 1800,
            house: {
              id: "1",
              size: 100,
              bedrooms: 3,
              area: 'Gubei',
              subwayLines: ['1 Line', '2 Line']
            }
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
