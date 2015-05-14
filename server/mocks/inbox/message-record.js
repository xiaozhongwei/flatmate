module.exports = function(app) {
  var express = require('express');
  var inboxMessageRecordRouter = express.Router();

  inboxMessageRecordRouter.get('/', function(req, res) {
    res.send({
      'inbox/message-record': []
    });
  });

  inboxMessageRecordRouter.post('/', function(req, res) {
    req.body["inbox/messageRecord"].id = (new Date()).getTime();
    res.send(req.body);
  });

  inboxMessageRecordRouter.get('/:id', function(req, res) {
    res.send({
      'inbox/message-record': {
        id: req.params.id
      }
    });
  });

  inboxMessageRecordRouter.put('/:id', function(req, res) {
    res.send({
      'inbox/message-record': {
        id: req.params.id
      }
    });
  });

  inboxMessageRecordRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/inbox/messageRecords', require('body-parser').json(),inboxMessageRecordRouter);
};
