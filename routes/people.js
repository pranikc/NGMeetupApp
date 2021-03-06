var express = require('express');
var router = express.Router();
var person = require('../models/person');

router.get('/', function(req, res, next) {
    var callback = function(err, people) {
        if(err)
            res.send('error getting people');
        else
            res.send(people);
    }

    person.all(callback);
});

router.get('/hobbies', function(req,res, next) {
    var callback = function(err, hobbies) {
        if (err)
            res.send('Unable to get the hobbies');
        else
            res.send(hobbies);
    }

    person.getHobbies(callback);
});

router.post('/', function(req, res, next) {

    var newPerson = req.body;

    console.log(newPerson);
    var callback = function(err) {
        res.send(err);
    }

    person.add(newPerson, callback);
});

module.exports = router;

// A rounte called /People which will return the list of all people if a get command is given
// A route called /People which will add a person of type {name:"", hobby:""} is a post command is mage