var express = require('express' );
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 3000;

var app = module.exports = express();

var massive = require('massive');
var connectionString = "postgres://massive:Forces$57@localhost/massive_demo";
var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);
var db = app.get('db');

// var db = massive.connectSync({
//   connectionString : 'postgres://massive:Forces$57@localhost/massive_demo'
// });

app.use(bodyParser.json());
app.use(cors());




app.post('/products', function (req, res, next) {
  let product = req.body
  db.create_product([product.Name, product.Description, product.Price, product.Imageurl], function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      console.log(result);
      res.send(result)
    }
  })
});

app.get('/products', function(req, res, next) {
  db.read_products(function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  })
})

app.get('/product', function (req, res, next) {
  db.read_product([req.query.id], function (err, result) {
    res.send(result)
  })
})

app.put('/product/:productId', function (req, res, next) {//this will take req.query
  db.update_product([req.query.desc, req.params.productId], function (err, result) {
    res.send(result);
  })
})


app.listen(port, function () {
  console.log('listening on :', port);
})
