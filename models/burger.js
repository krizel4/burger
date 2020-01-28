const orm = require('../config/orm.js');

// call all ORM functions using specific input for the ORM
var burger = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (col, val, cb) {
    orm.insertOne('burgers', col, val, function (res) {
      cb(res);
    });
  },
  updateOne: function (col1, val1, col2, val2, cb) {
    orm.updateOne('burgers', col1, val1, col2, val2, function (res) {
      cb(res);
    });
  }
};

// export the burger.js file
module.exports = burger;