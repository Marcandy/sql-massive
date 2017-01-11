var express = require('express' );
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 3000;

var massive = require('massive');
var connectionString = "postgres://massive:Forces$57@localhost/massive_demo";

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});
app.set('db', massiveInstance);

var db = app.get('db');

app.listen(port, function () {
  console.log('listening on :', port);
})
