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

var products = require('./productsCtrl.js');

// var db = massive.connectSync({
//   connectionString : 'postgres://massive:Forces$57@localhost/massive_demo'
// });

app.use(bodyParser.json());
app.use(cors());




app.post('/products', products.Create);

app.get('/products', products.GetAll)

app.get('/product', products.GetOne)

app.put('/product/:productId', products.Update)

app.delete('/product/:productId', products.Delete)

app.listen(port, function () {
  console.log('listening on :', port);
})
