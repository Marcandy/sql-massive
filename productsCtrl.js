var app = require('./server.js');
var db = app.get('db');

module.exports = {
  Create: function (req, res, next) {
    let product = req.body
    db.create_product([product.Name, product.Description, product.Price, product.Imageurl], function (err, result) {
      if (err) {
        res.status(500).send(err)
      } else {
        console.log(result);
        res.send(result)
      }
    })
  },

  GetOne: function (req, res, next) {
    db.read_product([req.query.id], function (err, result) {
      res.send(result)
    })
  },

  GetAll: function(req, res, next) {
    db.read_products(function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    })
  },

  Update: function (req, res, next) {//this will take req.query
    db.update_product([req.query.desc, req.params.productId], function (err, result) {
      res.send(result);
    })
  },

  Delete: function (req, res, next) {
    db.delete_product([req.params.productId], function(err, result) {
      res.send(result)
    })
  }



}
