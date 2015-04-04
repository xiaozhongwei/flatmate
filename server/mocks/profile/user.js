module.exports = function(app) {
  var express = require('express');
  var profileUserRouter = express.Router();

  profileUserRouter.get('/', function(req, res) {
    res.send({
      'profile/user': []
    });
  });

  profileUserRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  profileUserRouter.get('/:id', function(req, res) {
    res.send({
      'profile/user': {
        id: req.params.id,
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        gender: 'male',
        country: 'USA',
        phone: '22345678',
        occupation:'Student',
        hobbies: 'Running',
        logo: {id: "11111111", downloadFilePath: 'images/LISA_100.jpg'}
      }
    });
  });

  profileUserRouter.put('/:id', function(req, res) {
    res.send({
      'profile/user': {
        id: req.params.id,
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        gender: 'male',
        country: 'USA',
        hobbies: ["Running", "Football"],
        occupation: 'Clerk',
        logo: {id: "11111111", downloadFilePath: 'images/LISA_100.jpg'}
      }
    });
  });

  profileUserRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/profile/users', profileUserRouter);
};
