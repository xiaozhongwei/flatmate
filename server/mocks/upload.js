module.exports = function(app) {
  var express = require('express');
  var uploadRouter = express.Router();

  uploadRouter.get('/', function(req, res) {
    res.send({
      'upload': []
    });
  });

  uploadRouter.post('/', function(req, res) {
    var data = {
      upload: {documentId: Math.ceil(Math.random() * 1000), title: 'TEST_UPLOAD', downloadFilePath: 'images/amaze_300x300.jpg'}
    };
    res.send(data);
  });

  uploadRouter.get('/:id', function(req, res) {
    res.send({
      'upload': {
        id: req.params.id
      }
    });
  });

  uploadRouter.put('/:id', function(req, res) {
    res.send({
      'upload': {
        id: req.params.id
      }
    });
  });

  uploadRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/upload', uploadRouter);
};
