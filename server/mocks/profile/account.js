module.exports = function(app) {
  var express = require('express');
  var profileAccountRouter = express.Router();

  profileAccountRouter.get('/', function(req, res) {
    res.send({
      'profile/account': []
    });
  });

  profileAccountRouter.post('/', function(req, res) {
    //req.body["profile/account"].id = (new Date()).getTime();
    //res.send(req.body);
    res.send({});
    res.status(201).end();

    //失败返回：
    //res.status(422).send({
    //  'errors': [
    //    { "message": "用户邮箱已注册", "id": 1, "fieldName": "" }
    //  ]
    //});
  });

  profileAccountRouter.get('/:id', function(req, res) {
    res.send({
      'profile/account': {
        id: req.params.id
      }
    });
  });

  profileAccountRouter.put('/:id', function(req, res) {
    res.send({
      'profile/account': {
        id: req.params.id
      }
    });
  });

  profileAccountRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/accounts', require('body-parser').json(), profileAccountRouter);
};
