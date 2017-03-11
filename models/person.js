/**
 * Created by pranikchainani on 2/19/17.
 */
var db = require('../db');

var collectionName = 'people';

module.exports = {
    all: function(callback) {
        db.get().collection(collectionName).find().toArray(callback);
    },

    getHobbies: function(callback) {
        db.get().collection(collectionName).distinct("hobby",callback);
    },

    add: function(newPerson, callback) {
        var inserted = function(err) {
            if(!err)
                callback('person added');
            else
                callback(err);
        };

        if(!newPerson || newPerson.name === undefined ||
            newPerson.hobby === undefined || newPerson.email === undefined || newPerson.contactNumber === undefined)
            callback('unable to add person');
        else
            db.get().collection(collectionName).insertOne(newPerson, inserted);
    }
};

// A function called all() which returns all users
// A function called add() which adds a new user that has a .name and .hobby specified