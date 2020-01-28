// Import MySQL connection.
var connection = require("../config/connection.js");

// This following code was copied from the Cats App orm.js
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Changed according to HW ReadMe instructions. Also updated this eventually to match the model file and controller file. A big issue with these files was that they weren't watching objects. They had to match.
// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tableInput, cb) {
    // Cleaned code to have template literals. Easier to read.
    var queryString = `SELECT * FROM ${tableInput};`;

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (tableInput, colName, colVal, cb) {
    var queryString = `INSERT INTO ${tableInput} (${colName.toString()}, devoured) VALUES ('${colVal}', false)`;
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(tableInput, colVal, condition, cb) {
    var queryString = `UPDATE ${tableInput} SET ${objToSql(colVal)} WHERE ${condition}`;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model.
module.exports = orm;
