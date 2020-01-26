const orm = require('../config/orm.js');

// call all ORM functions using specific input for the ORM
var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        });
    },
    // create
    create: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    // update
    update: function(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, function(res) {
            cb(res);
        })
    },
    // delete
    delete: function(condition, cb) {
        orm.update('burgers', condition, function(res) {
            cb(res);
        });
    }
};

// export the burger.js file
module.exports = burger;