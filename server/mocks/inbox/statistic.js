module.exports = function(app) {
  var express = require('express');
  var inboxStatisticRouter = express.Router();

  inboxStatisticRouter.get('/', function(req, res) {
    res.send({
      'inbox/statistics': [{
        id: 1,
        type: "All",
        count: 50
      },{
        id: 2,
        type: "Read",
        count: 30
      },{
        id: 3,
        type: "Unread",
        count: 20
      }]
    });
  });

  inboxStatisticRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  inboxStatisticRouter.get('/:id', function(req, res) {
    res.send({
      'inbox/statistic': {
        id: req.params.id
      }
    });
  });

  inboxStatisticRouter.put('/:id', function(req, res) {
    res.send({
      'inbox/statistic': {
        id: req.params.id
      }
    });
  });

  inboxStatisticRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/inbox/statistics', inboxStatisticRouter);
};
