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
            index: "1",
            title: "舒适向南单间",
            features: ["Balcony","PrivateBath"],
            photos: [{id: "11", index:0, imageUrl:"images/post-5.jpg"}],
            status: 0,
            rentType: "share",
            perSixMonthPrice: 1800,
            house: {
              id: "1",
              size: 100,
              bedrooms: 3,
              bathrooms: 2,
              area: 'Gubei',
              compound: '华纺小区',
              floor: 8,
              address: '江宁路/康定路 1033',
              subwayLines: ['1 Line', '2 Line'],
              "flatmates": [{
                "id": "7e89279d-1797-4ac0-80fc-0247c5a91cc1",
                "index": 1,
                "houseId": "1",
                "listingId": "54f71a3b641d671418a3f635",
                "status": 0
              }, {
                "id": "7eac37c2-2ad1-462d-8710-2882ff4d5a2b",
                "index": 2,
                "houseId": "1",
                "listingId": "54f7199e641d671418a3f634",
                "status": 0
              }, {
                "id": "7eac37c2-2ad1-462d-8710-28cccf4d5a2b",
                "index": 3,
                "houseId": "1",
                "status": 1,
                "country": "USA",
                "occupation": "student",
                "gender": "2"
              }, {
                "id": "7eac37c2-2ad1-462d-8710-2002ff4d5a2b",
                "index": 4,
                "houseId": "1",
                "status": 1,
                "country": "UK",
                "occupation": "student",
                "gender": "1"
              }]
            }
          }]
        }
      ]
    });
  });

  profileWishlistRouter.post('/add', function(req, res) {
    res.send({
      'profile/wishlist':{
        id: 1,
        listings: [{id: 1}]
      }
    });
    //res.status(201).end();
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
