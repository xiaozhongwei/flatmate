module.exports = function(app) {
  var express = require('express');
  var listingTenantRouter = express.Router();

  listingTenantRouter.get('/', function(req, res) {
    res.send({
      'listing/tenants': [
        {
          id: 1,
          listing: 1,                                     //所属listing
          status: 'current',                              //状态
          "listingId": "4",
          "firstName": "liu",
          idNumber: "421221",
          "country": "UK",
          "occupation": "Student",
          "gender": '2',

          email: "444@qq.com",                               //邮箱
          phone: "15892849491",                              //phone
          contractStartDate: "2015-07-01",                   //合同开始日期
          contractEndDate: "2016-07-01",                     //合同结束日期
          //checkoutDate: "",                                  //checkout日期

          paymentCycle: "3",                                 //付款周期
          deposit: "2000",                                   //押金
          price: "2000",                                     //价格
          advanceDay: 10                                     //提前天数
        },
        {
          id: 2,
          listing: 1,                                     //所属listing
          status: 'current',                              //状态
          //"listingId": "4",
          "firstName": "VIN",
          idNumber: "421221",
          "country": "UK",
          "occupation": "Student",
          "gender": '2',

          email: "444@qq.com",                               //邮箱
          phone: "15892849491",                              //phone
          contractStartDate: "2015-07-01",                   //合同开始日期
          contractEndDate: "2016-07-01",                     //合同结束日期
          //checkoutDate: "",                                  //checkout日期

          paymentCycle: "3",                                 //付款周期
          deposit: "2000",                                   //押金
          price: "2000",                                     //价格
          advanceDay: 10                                     //提前天数
        }
      ]
    });
  });

  listingTenantRouter.post('/', function(req, res) {
    res.send({
      'listing/tenant': {
        id: (new Date()).getTime(),
        listing: 6,                                     //所属listing
        status: 'pendding'                              //状态
      }
    });
    res.status(201).end();
  });

  listingTenantRouter.get('/:id', function(req, res) {
    res.send({
      'listing/tenant': {
        id: req.params.id
      }
    });
  });

  listingTenantRouter.put('/:id', function(req, res) {
    res.send({
      'listing/tenant': {
        id: req.params.id
      }
    });
  });

  listingTenantRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/listing/tenants', listingTenantRouter);
};
