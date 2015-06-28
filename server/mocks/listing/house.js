module.exports = function(app) {
  var express = require('express');
  var listingHouseRouter = express.Router();

  listingHouseRouter.get('/', function(req, res) {
    res.send({
      'listing/houses': [
        {
          id: 1,
          area: 'Hongkou',
          compound: '鸿艺豪苑',
          building: 8,
          floor: 3,
          doorplate: 202,
          size:100,
          bedrooms: 4,
          bathrooms: 1,
          livingRooms: 1,
          metroStations: ["Anshan Xincun"],
          rentType: 'share',
          listings: [{
              id: "6",
              title: "Listing 1",
              "perThreeMonthPrice": 2800,
              "perSixMonthPrice": 2500,
              "deposit": 0.0,
              photos: [
                {id:"61",index: 1, imageUrl:"images/post-5.jpg"},
                {id:"62",index: 0, imageUrl:"images/post-5.jpg"}
              ],
              status: 0,
              "links":{
                "tenants":"/api/listing/tenants?listingId=6"
              }
            }, {
              id: "7",
              title: "Listing 2",
              status: 0
          }],
          photos: [{id: "101", index:0, imageUrl:"images/post-5.jpg"}],
          amenities: ["WashingMachine","Aircon","TV"]
        }, {
          id: 2,
          bedrooms: 3,
          bathrooms: 1,
          livingRooms: 1,
          rentType: 'entire',
          //createDate: '2015-03-14',
          listings: [{
              id: "5",
              title: "豪华四室公寓",
              "perThreeMonthPrice": 2800,
              "perSixMonthPrice": 2500,
              "deposit": 0.0,
              photos: [{id: "51", index:0, imageUrl:"images/post-5.jpg"}],
              status: 0
          }]
        },{
          id: 3,
          "bedrooms": 4,
          "bathrooms": 2,
          "livingRooms": 1,
          "createType": 0,
          size: "100",
          //"rentType": "entire",
          "rentType": "share",
          listings: [{
            id: "1",
            title: "舒适向南单间",
            "perThreeMonthPrice": 2800,
            "perSixMonthPrice": 2500,
            "deposit": 0.0,
            photos: [{id: "11", index:0, imageUrl:"images/post-5.jpg"}],
            status: 0
          },{
            id: "2",
            "perThreeMonthPrice": 2800,
            "perSixMonthPrice": 2500,
            "deposit": 0.0,
            status: 0
          },{
            id: "3",
            "perThreeMonthPrice": 2800,
            "perSixMonthPrice": 2500,
            "deposit": 0.0,
            status: 0
          },{
            id: "4",
            "perThreeMonthPrice": 2800,
            "perSixMonthPrice": 2500,
            "deposit": 0.0,
            status: 0
          }],
          "flatmates": [{
            "id": "1",
            "index": 1,
            "listingId": "1",
            "status": 0
          }, {
            "id": "2",
            "index": 2,
            "listingId": "2",
            "status": 0
          }, {
            "id": "3",
            "index": 3,
            "listingId": "3",
            "status": 1,
            "country": "USA",
            "occupation": "Student",
            "gender": 1
          }, {
            "id": "4",
            "index": 4,
            "listingId": "4",
            "status": 1,
            "country": "UK",
            "occupation": "Student",
            "gender": 2
          }],
          photos: [{id: "301", index:0, imageUrl:"images/post-5.jpg"}],
          amenities: ["WashingMachine","Aircon","TV"]
        }
      ],
      meta: {
        totalCount: 25,
        totalPage: 13
      }
    });
  });

  listingHouseRouter.post('/', function(req, res) {
    req.body["listing/house"].id = (new Date()).getTime();

    if(req.body["listing/house"].rentType == "entire"){
      req.body["listing/house"].listings = [{
        "id": (new Date()).getTime(),
        "perMonthPrice": 0,
        "perThreeMonthPrice": 0,
        "perSixMonthPrice": 1800,
        "perYearPrice": 0,
        "deposit": 0,
        "status": 0
      }];

    }
    else{
      //res.send({
      //  'listing/house': {
      //    "id": (new Date()).getTime(),
      //    "bathrooms": 0,
      //    "bedrooms": 0,
      //    "livingRooms": 0,
      //    "createType": 0,
      //    "rentType": "share"
      //  }
      //});
    }
    res.send(req.body);
    res.status(201).end();
  });

  listingHouseRouter.get('/:id', function(req, res) {
    if(req.params.id < 10000){
      res.send({
        'listing/house': {
          id: req.params.id,
          "bedrooms": 4,
          "bathrooms": 2,
          "livingRooms": 1,
          "createType": 0,
          size: "100",
          //"rentType": "entire",
          "rentType": "share",
          //"publishStep": 1,
          listings: [{
            id: "1",
            index: 1,
            title: "舒适向南单间",
            photos: [{id: "11", index:1, imageUrl:"images/post-5.jpg"}],
            payments: [
              {
                "cycle": 3,
                "price": 2800
              },
              {
                "cycle": 6,
                "price": 2500
              }
            ],
            status: 0,
            "links":{
              "tenants":"/api/listing/tenants?listingId=1"
            }
          },{
            id: "2",
            index: 3,
            status: 0,
            payments: [
              {
                "cycle": 3,
                "price": 2800
              },
              {
                "cycle": 6,
                "price": 2500
              }
            ],
            "links":{
              "tenants":"/api/listing/tenants?listingId=3"
            }
          },{
            id: "3",
            index: 3,
            status: 0,
            payments: [
              {
                "cycle": 3,
                "price": 2800
              },
              {
                "cycle": 6,
                "price": 2500
              }
            ],
            "links":{
              "tenants":"/api/listing/tenants?listingId=3"
            }
          },{
            id: "4",
            index: 4,
            status: 0,
            payments: [
              {
                "cycle": 3,
                "price": 2800
              },
              {
                "cycle": 6,
                "price": 2500
              }
            ],
            "links":{
              "tenants":"/api/listing/tenants?listingId=3"
            }
          }],
          "flatmates": [{
            "id": "1",
            "index": 1,
            "listingId": "1",
            "status": 0
          }, {
            "id": "2",
            "index": 2,
            "listingId": "2",
            "status": 0
          }, {
            "id": "3",
            "index": 3,
            "listingId": "3",
            "status": 1,
            "country": "USA",
            "occupation": "Student",
            "gender": "1"
          }, {
            "id": "4",
            "index": 4,
            "listingId": "4",
            "status": 1,
            "country": "UK",
            "occupation": "Student",
            "gender": "2"
          }],
          photos: [{id: "21", index:0, imageUrl:"images/post-5.jpg"}],
          amenities: ["WashingMachine","Aircon","TV"]
        }
      });
    }
    else{
      res.send({
        'listing/house': {
          id: req.params.id,
          "bedrooms": 4,
          "bathrooms": 2,
          "livingRooms": 1,
          "createType": 0,
          size: "100",
          "rentType": "entire",
          //"rentType": "share",
          //"publishStep": 1,
          listings: [{
            id: "1",
            index: 1,
            title: "舒适向南单间",
            payments: [
              {
                "cycle": 3,
                "price": 2800
              },
              {
                "cycle": 6,
                "price": 2500
              }
            ],
            photos: [{id: "11", index:1, imageUrl:"images/post-5.jpg"}],
            status: 0,
            "links":{
              "tenants":"/api/listing/tenants?listingId=1"
            }
          }],
          photos: [{id: "21", index:0, imageUrl:"images/post-5.jpg"}],
          amenities: ["WashingMachine","Aircon","TV"]
        }
      });
    }

  });

  listingHouseRouter.put('/:id', function(req, res) {
    req.body["listing/house"].id = req.params.id;
    req.body["listing/house"].listings = [{
      id: "1",
      title: "舒适向南单间",
      photos: [{id: "11", index:1, imageUrl:"images/post-5.jpg"}],
      status: 0
    },{
      id: "2",
      status: 0
    },{
      id: "3",
      status: 0
    },{
      id: "4",
      status: 0
    }];
    req.body["listing/house"].flatmates = [{
      "id": "1",
      "index": 1,
      "listingId": "1",
      "status": 0
    }, {
      "id": "2",
      "index": 2,
      "listingId": "2",
      "status": 1
    }, {
      "id": "3",
      "index": 3,
      "listingId": "3",
      "status": 1,
      "country": "USA",
      "occupation": "Student",
      "gender": '1'
    }, {
      "id": "4",
      "index": 4,
      "listingId": "4",
      "status": 1,
      "country": "UK",
      "occupation": "Student",
      "gender": '2'
    }];
    res.send(req.body);
  });

  listingHouseRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing/houses', require('body-parser').json(),listingHouseRouter);
};
