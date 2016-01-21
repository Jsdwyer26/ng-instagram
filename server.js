// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/ng_instagram');

// require Photo model
var Photo = require('./models/photo');


/*
 * API routes
 */

// get all photos
app.get('/api/photos', function (req, res) {
  // find all photos in db
  Photo.find(function (err, allPhotos) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(allPhotos);
    }
  });
});


/*
 * Load `views/index.hbs` file
 * when any route is requested from the server
 */


app.get('*', function (req, res) {
  res.render('index');
});

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});