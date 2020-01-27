const orm = require('../config/orm.js');

// call all ORM functions using specific input for the ORM
var burger = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// export the burger.js file
module.exports = burger;