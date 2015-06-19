module.exports = function(app) {
  var express = require('express');
  var inboxMessageRouter = express.Router();

  inboxMessageRouter.get('/', function(req, res) {
    res.send({
      'inbox/messages': [{
        id: 1,
        speakerName:  'Jack',
        speakerPhoto: 'images/amaze_300x300.jpg',
        listingTitle: '瑞虹温馨单间',
        lastContent:  'Lisa, I want to see the room first.',
        lastUpdateTime: '2014-11-27 11:40:29'
      },{
        id: 2,
        speakerName:  'Monica',
        listingTitle: '温馨向南单间',
        lastContent:  'Hi Lisa',
        lastUpdateTime: '2014-11-17 11:40:29'
      }],
      meta: {
        totalCount: 25,
        totalPage: 123
      }
    });
  });

  inboxMessageRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  inboxMessageRouter.get('/:id', function(req, res) {
    res.send({
      'inbox/message': {
        id: req.params.id,
        speakerName:  'Jack',
        speakerPhoto: 'images/amaze_300x300.jpg',

        checkinDate: '2015-08-08',
        livingMonth: 12,
        guestNumber: 2,
        payCycleMapping: 3,
        price: 2800,

        listingId: 1,
        listingTitle: '瑞虹温馨单间',
        lastContent:  'Lisa, I want to see the room first.',
        lastUpdateTime: '2014-11-17 11:40:29',
        records: [
          {
            id: 1,
            content: 'OK, this Sunday',
            sender: "1234",
            senderName: 'Lisa',
            senderPhoto: 'images/LISA_100.jpg',
            receiver: 1,
            receiverName: 'Jack',
            receiverPhoto: 'images/amaze_300x300.jpg',
            listingTitle: '瑞虹温馨单间',
            createTime: '2014-11-17 11:40:29',
            mark: false
          },{
            id: 2,
            content: 'Can I visit the room first?',
            sender: 1,
            senderName: 'Jack',
            senderPhoto: 'images/amaze_300x300.jpg',
            receiver: "1234",
            receiverName: 'Lisa',
            receiverPhoto: 'images/LISA_100.jpg',
            listingTitle: '瑞虹温馨单间',
            createTime: '2014-11-17 11:39:29',
            mark: true
          }
        ]
      }
    });
  });

  inboxMessageRouter.put('/:id', function(req, res) {
    res.send({
      'inbox/message': {
        id: req.params.id
      }
    });
  });

  inboxMessageRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/inbox/messages', inboxMessageRouter);
};
