module.exports = function(app) {
  var express = require('express');
  var postRouter = express.Router();

  postRouter.get('/', function(req, res) {
    res.send({
      'post': []
    });
  });

  postRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postRouter.get('/:id', function(req, res) {
    res.send({
      'post': {
        id: req.params.id
      }
    });
  });

  postRouter.put('/:id', function(req, res) {
    res.send({
      'post': {
        id: req.params.id
      }
    });
  });

  postRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/post', postRouter);
};
