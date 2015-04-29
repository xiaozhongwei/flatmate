module.exports = function(app) {
  var express = require('express');
  var listingRouter = express.Router();

  listingRouter.get('/', function(req, res) {
    res.send({
      'listings': [{
        "id": "54f7199e641d671418a3f634",
        "availableDate": "2015-03-30",
        creatorId: '1001',
        creatorName: 'Lisa',
        creatorPhoto: 'images/amaze_300x300.jpg',
        creatorDescription: 'Hello, I‘m Lisa, a young girl living and working in Shanghai. I am outgoing and friendly, fond of people, traveling & food :) I worked as a Skincare Shop Manager before starting the "hosting idea" in 2012.',
        "title": "温馨朝南单间",
        "description": "Dictumst vestibulum odio mi dolor justo curabitur tellus nostra bibendum facilisis vitae est",
        "perMonthPrice": 3000,
        "perThreeMonthPrice": 2800,
        "perSixMonthPrice": 2500,
        "deposit": 0.0,
        "features": ["Balcony","PrivateBath","DeskOrWardrobe"],
        "photos": [
          {id: "21", index: 1, imageUrl: "images/post-5.jpg"},
          {id: "22", index: 0, imageUrl: "images/post-5.jpg"}
        ],
        "house": {
          "id": "3",
          "bathrooms": 3,
          "bedrooms": 2,
          "livingRooms": 0,
          size: 100,
          "rentType": "share",
          "type": 0,
          "subwayLines": ["1 Line", "2 Line"],
          "metroStation": ["Anshan Xincun"],
          "area": "Hongkou",
          "compound": "静安豪景",
          "building": "1",
          "floor": "2",
          "amenities": ["WashingMachine","TV","Oven","Dryer","Internet","Security","Pool","Balcony","Elevator"],
          "flatmates": [{
            "id": "7e89279d-1797-4ac0-80fc-0247c5a91cc1",
            "index": 1,
            "houseId": "3",
            "listingId": "54f71a3b641d671418a3f635",
            "status": 0
          }, {
            "id": "7eac37c2-2ad1-462d-8710-2882ff4d5a2b",
            "index": 2,
            "houseId": "3",
            "listingId": "54f7199e641d671418a3f634",
            "status": 0
          }, {
            "id": "7eac37c2-2ad1-462d-8710-28cccf4d5a2b",
            "index": 3,
            "houseId": "3",
            "status": 1,
            "country": "USA",
            "occupation": "student",
            "gender": "2"
          }, {
            "id": "7eac37c2-2ad1-462d-8710-2002ff4d5a2b",
            "index": 4,
            "houseId": "3",
            "status": 1,
            "country": "UK",
            "occupation": "student",
            "gender": "1"
          }],
          "contact": {
            "id": "c9c46d23-bdd9-4b94-a029-e32327f46175",
            "name": "lisa",
            "email": "lisa",
            "phone": "1112",
            "wechat": "1111"
          },
          "photos": [{
            "id": "1",
            "index": 0,
            "imageUrl": "http://7u2qna.com1.z0.glb.clouddn.com/BodyPart_ec840e61-ef79-4b24-a95b-37a60e77ee57"
          }, {
            "id": "2",
            "index": 0,
            "imageUrl": "http://7u2qna.com1.z0.glb.clouddn.com/BodyPart_d029c300-9ee0-43cf-8d36-f6fee8383bd6"
          }]
        },
        "createUserName": "1111@qq.com",
        "createTime": "2015-03-04T14:41:34.011Z",
        "status": 1
      },{
        "id": "54f7199e64ed6rw71418a3f623",
        "availableDate": "2015-03-30",
        creatorId: '1001',
        creatorName: 'Lisa',
        creatorPhoto: 'images/amaze_300x300.jpg',
        creatorDescription: 'Hello, I‘m Lisa, a young girl living and working in Shanghai. I am outgoing and friendly, fond of people, traveling & food :) I worked as a Skincare Shop Manager before starting the "hosting idea" in 2012.',
        "title": "温馨单间",
        "description": "Dictumst vestibulum odio mi dolor justo curabitur tellus nostra bibendum facilisis vitae est",
        "perMonthPrice": 3000,
        "perThreeMonthPrice": 2800,
        "perSixMonthPrice": 2500,
        "deposit": 0.0,
        "features": ["Balcony","PrivateBath","DeskOrWardrobe"],
        "photos": [
          {id: "25", index: 1, imageUrl: "images/post-5.jpg"},
          {id: "28", index: 0, imageUrl: "images/post-5.jpg"}
        ],
        "house": {
          "id": "4",
          "bathrooms": 3,
          "bedrooms": 2,
          "livingRooms": 0,
          size: 100,
          "rentType": "entire",
          "type": 0,
          "subwayLines": ["1 Line", "2 Line"],
          "metroStation": ["Anshan Xincun"],
          "area": "Hongkou",
          "compound": "静安豪景",
          "building": "1",
          "floor": "2",
          "amenities": ["WashingMachine","TV","Oven","Dryer","Internet","Security","Pool","Balcony","Elevator"],
          "contact": {
            "id": "c9c46d23-bdd9-4b94-a029-e32327f46175",
            "name": "lisa",
            "email": "lisa",
            "phone": "1112",
            "wechat": "1111"
          }
        },
        "createUserName": "1111@qq.com",
        "createTime": "2015-03-04T14:41:34.011Z",
        "status": 1
      }],
      "meta": {
        "totalCount": 100,
        "totalPage": 12
      }
    });
  });

  listingRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listingRouter.get('/:id', function(req, res) {
    res.send({
      'listing': {
        id: req.params.id,
        "availableDate": "2015-03-30",
        creatorId: '1001',
        creatorName: 'Lisa',
        creatorPhoto: 'images/amaze_300x300.jpg',
        creatorDescription: 'Hello, I‘m Lisa, a young girl living and working in Shanghai. I am outgoing and friendly, fond of people, traveling & food :) I worked as a Skincare Shop Manager before starting the "hosting idea" in 2012.',
        "title": "温馨朝南单间",
        "description": "Dictumst vestibulum odio mi dolor justo curabitur tellus nostra bibendum facilisis vitae est",
        //"perMonthPrice": 3000,
        "perThreeMonthPrice": 2800,
        "perSixMonthPrice": 2500,
        "deposit": 0.0,
        "features": ["Balcony","PrivateBath","DeskOrWardrobe"],
        "photos": [
          {id: "21", index: 1, imageUrl: "images/post-5.jpg"},
          {id: "22", index: 0, imageUrl: "images/post-5.jpg"}
        ],
        "house": {
          "id": "3",
          "bathrooms": 3,
          "bedrooms": 2,
          "livingRooms": 0,
          size: 100,
          "rentType": "share",
          "type": 0,
          "subwayLines": ["1 Line", "2 Line"],
          "metroStations": ["Anshan Xincun","HaiLun Road"],
          "area": "Hongkou",
          "compound": "静安豪景",
          "building": "1",
          "floor": "2",
          "amenities": ["WashingMachine","TV","Oven","Dryer","Internet","Security","Pool","Balcony","Elevator"],
          "flatmates": [{
            "id": "7e89279d-1797-4ac0-80fc-0247c5a91cc1",
            "index": 1,
            "houseId": "3",
            "listingId": req.params.id,
            "status": 0
          }, {
            "id": "7eac37c2-2ad1-462d-8710-2882ff4d5a2b",
            "index": 2,
            "houseId": "3",
            "listingId": "54f7199e641d671418a3f634",
            "status": 0
          }, {
            "id": "7eac37c2-2ad1-462d-8710-28cccf4d5a2b",
            "index": 3,
            "houseId": "3",
            "status": 1,
            "country": "USA",
            "occupation": "student",
            "gender": "2"
          }, {
            "id": "7eac37c2-2ad1-462d-8710-2002ff4d5a2b",
            "index": 4,
            "houseId": "3",
            "status": 1,
            "country": "UK",
            "occupation": "student",
            "gender": "1"
          }],
          "contact": {
            "id": "c9c46d23-bdd9-4b94-a029-e32327f46175",
            "name": "lisa",
            "email": "lisa",
            "phone": "1112",
            "wechat": "1111"
          },
          "photos": [{
            "id": "1",
            "index": 0,
            "imageUrl": "http://7u2qna.com1.z0.glb.clouddn.com/BodyPart_ec840e61-ef79-4b24-a95b-37a60e77ee57"
          }, {
            "id": "2",
            "index": 0,
            "imageUrl": "http://7u2qna.com1.z0.glb.clouddn.com/BodyPart_d029c300-9ee0-43cf-8d36-f6fee8383bd6"
          }]
        },
        "createUserName": "1111@qq.com",
        "createTime": "2015-03-04T14:41:34.011Z",
        "status": 1
      }
    });
  });

  listingRouter.put('/:id', function(req, res) {
    res.send({
      'listing': {
        id: req.params.id
      }
    });
  });

  listingRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listings', listingRouter);
};
