module.exports = function(app) {
  var express = require('express');
  var listingHouseRouter = express.Router();

  listingHouseRouter.get('/', function(req, res) {
    res.send({
      'listing/houses': [
        {
          id: 1,
          name: 'Rainbow City Building 8 Floor 2',
          area: 'Hongkou',
          compound: '鸿艺豪苑',
          building: 8,
          floor: 3,
          doorplate: 202,
          bedrooms: 4,
          bathrooms: 1,
          livingRooms: 1,
          rentType: 'shared',
          //createDate: '2015-03-14',
          listings: [{
              id: "2",
              title: "Listing 1",
              photos: [
                {id:"21",index: 1, downloadFilePath:"images/street_yoga_800x600.jpg"},
                {id:"22",index: 0, downloadFilePath:"images/hotel_eden_mar_suite_800x600.jpg"}
              ],
              status: 0
            }, {
              id: "3",
              title: "Listing 2",
              status: 0
          }]
        }, {
          id: 2,
          name: 'Rainbow City Building 8 Floor 3',
          bedrooms: 3,
          bathrooms: 1,
          livingRooms: 1,
          rentType: 'shared',
          //createDate: '2015-03-14',
          listings: [{
              id: "1",
              title: "舒适向南单间",
              photos: [{id: "11", index:0, downloadFilePath:"images/street_yoga_800x600.jpg"}],
              status: 0
          }]
        }
      ],
      meta: {
        totalCount: 25,
        totalPage: 13
      }
    });
  });

  listingHouseRouter.post('/', function(req, res) {
    if(req.body["listing/house"].rentType == "entire"){
      res.send({
        'listing/house': {
          "id": (new Date()).getTime(),
          "bathrooms": 0,
          "bedrooms": 0,
          "livingRooms": 0,
          "createType": 0,
          "rentType": "entire",
          "listings": [{
            "id": (new Date()).getTime(),
            "perMonthPrice": 0,
            "perThreeMonthPrice": 0,
            "perSixMonthPrice": 0,
            "perYearPrice": 0,
            "deposit": 0,
            "status": 0
          }]
        }
      });
    }
    else{
      res.send({
        'listing/house': {
          "id": (new Date()).getTime(),
          "bathrooms": 0,
          "bedrooms": 0,
          "livingRooms": 0,
          "createType": 0,
          "rentType": "share"
        }
      });
    }
    res.status(201).end();
  });

  listingHouseRouter.get('/:id', function(req, res) {
    res.send({
      'listing/house': {
        id: req.params.id,
        "bathrooms": 0,
        "bedrooms": 0,
        "livingRooms": 0,
        "createType": 0,
        "rentType": "share"
      }
    });
  });

  listingHouseRouter.put('/:id', function(req, res) {
    res.send({
      'listing/house': {
        id: req.params.id
      }
    });
  });

  listingHouseRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing/houses', require('body-parser').json(),listingHouseRouter);
};