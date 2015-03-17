function containsAny(s, words) {
  var result = false;

  for (var i = 0; i < words.length; i++) {
    if (s.indexOf(words[i]) > 0) {
      result = true;
      break;
    }
  } 
  return result;
};   

function filterTrucks(food, trucks) {
  var result = trucks;

  if (food.length > 0) {
    var foodArray = food.toLowerCase().split(' ');
    var filter = function(truck) {
      return containsAny(truck.fooditems.toLowerCase(), foodArray);
    }
    result = trucks.filter(filter);
  }
  return result;
};

var https = require('https');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/trucks', function (req, res) {
  var food = req.query.food;
  if (food === undefined) {
    food = '';
  }

  var data = '';

  https.get('https://data.sfgov.org/resource/rqzj-sfat?status=approved', function(sfRes) {

    sfRes.on('data', function(d) {
      data += d;
    });
		
    sfRes.on('end', function() {
      var trucks = [];
      try {
        trucks = JSON.parse(data);
        trucks = filterTrucks(food, trucks);
      } catch (e) {
        console.error('Problem parsing sfgov.org data: ' + e);
      }
      res.json(trucks);
  	});

	}).on('error', function(e) {
  		console.error('Error calling sfgov.org: ' + e);
      res.status(500);
      res.send('The server encountered a problem');
	}); 
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});