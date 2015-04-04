module.exports = function(app) {
  var express = require('express');
  var listingLandloadRouter = express.Router();

  listingLandloadRouter.get('/', function(req, res) {
    res.send({
      'listing/landload': []
    });
  });

  listingLandloadRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listingLandloadRouter.get('/:id', function(req, res) {
    res.send({
      'listing/landload': {
        id: req.params.id,
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        gender: 'male',
        country: 'USA',
        languages: ["English", "Chinese"],
        hobbies: ["Running", "Football"],
        occupation: 'Clerk',
        photo: 'images/amaze_300x300.jpg',
        description: 'Hello, I‘m Lisa, a young girl living and working in Shanghai. I am outgoing and friendly, fond of people, traveling & food :) I worked as a Skincare Shop Manager before starting the "hosting idea" in 2012.',
        listingsCount: 3,
        latestListing: {
          "id": "54f7199e641d671418a3f634",
          "availableDate": "2015-03-30",
          creatorId: '1001',
          creatorName: 'Lisa',
          creatorPhoto: 'images/amaze_300x300.jpg',
          creatorDescription: 'Hello, I‘m Lisa, a young girl living and working in Shanghai. I am outgoing and friendly, fond of people, traveling & food :) I worked as a Skincare Shop Manager before starting the "hosting idea" in 2012.',
          "title": "温馨朝南单间",
          "description": "Dictumst vestibulum odio mi dolor justo curabitur tellus nostra bibendum facilisis vitae est",
          "perMonthPrice": 3000,
          "perThreeMonthPrice": 3000,
          "perSixMonthPrice": 0.0,
          "perYearPrice": 0.0,
          "deposit": 0.0,
          "features": ["Balcony","PrivateBath","DeskOrWardrobe"],
          "photos": [
            {id: "21", index: 1, downloadFilePath: "images/street_yoga_800x600.jpg"},
            {id: "22", index: 0, downloadFilePath: "images/hotel_eden_mar_suite_800x600.jpg"}
          ],
          "house": {
            "id": "3",
            "name": "外滩 静安豪景 Building 1 Floor 2",
            "bathrooms": 3,
            "bedrooms": 2,
            "livingRooms": 0,
            "rentType": "shared",
            "type": 0,
            "metroStation": "Anshan Xincun",
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
              "status": "available"
            }, {
              "id": "7eac37c2-2ad1-462d-8710-2882ff4d5a2b",
              "index": 2,
              "houseId": "3",
              "listingId": "54f7199e641d671418a3f634",
              "status": "available"
            }, {
              "id": "7eac37c2-2ad1-462d-8710-28cccf4d5a2b",
              "index": 3,
              "houseId": "3",
              "status": "occupied",
              "country": "USA",
              "occupation": "student",
              "gender": "male"
            }, {
              "id": "7eac37c2-2ad1-462d-8710-2002ff4d5a2b",
              "index": 4,
              "houseId": "3",
              "status": "occupied",
              "country": "UK",
              "occupation": "student",
              "gender": "female"
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
              "downloadFilePath": "http://7u2qna.com1.z0.glb.clouddn.com/BodyPart_ec840e61-ef79-4b24-a95b-37a60e77ee57"
            }, {
              "id": "2",
              "index": 0,
              "downloadFilePath": "http://7u2qna.com1.z0.glb.clouddn.com/BodyPart_d029c300-9ee0-43cf-8d36-f6fee8383bd6"
            }]
          },
          "createUserName": "1111@qq.com",
          "createTime": "2015-03-04T14:41:34.011Z",
          "status": 1
        }
      }
    });
  });

  listingLandloadRouter.put('/:id', function(req, res) {
    res.send({
      'listing/landload': {
        id: req.params.id
      }
    });
  });

  listingLandloadRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing/landloads', listingLandloadRouter);
};
