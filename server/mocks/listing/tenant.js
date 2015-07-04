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
          serviceFee: "500",                                 //服务费
          advanceDay: 10,                                    //提前天数
          paymentRecords: [
            {
              id: 11,
              paymentDate: "2015-06-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: [
                {
                  id: 111,
                  transactionDate: "2015-06-21",              //交易日期
                  account: "6000",                      //金额
                  remark: "押金"                        //备注
                },
                {
                  id: 112,
                  transactionDate: "2015-06-21",              //交易日期
                  account: "1500"                          //金额
                }
              ]
            },
            {
              id: 12,
              paymentDate: "2015-09-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: [
                {
                  id: 121
                }
              ]
            },
            {
              id: 13,
              paymentDate: "2015-12-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: [
                {
                  id: 131
                }
              ]
            },
            {
              id: 14,
              paymentDate: "2016-03-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: [
                {
                  id: 141
                }
              ]
            }
          ]
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
          advanceDay: 10,                                     //提前天数
          paymentRecords: [
            {
              id: 21,
              paymentDate: "2015-06-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: [
                {
                  id: 211,
                  transactionDate: "2015-06-21",              //交易日期
                  account: "6000",                      //金额
                  remark: "暂付六千"                        //备注
                },
                {
                  id: 212,
                  transactionDate: "2015-06-21",              //交易日期
                  account: "1500"                          //金额
                }
              ]
            },
            {
              id: 22,
              paymentDate: "2015-09-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: []
            },
            {
              id: 23,
              paymentDate: "2015-12-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: []
            },
            {
              id: 24,
              paymentDate: "2016-03-21",                    //付款日期
              account: 9500,                                //金额
              //实际付款记录
              transactionRecords: []
            }
          ]
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
