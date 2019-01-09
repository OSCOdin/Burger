var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM burgers_db.burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(val) {
      var queryString = "INSERT INTO burgers(burger_name) VALUES(";
      queryString += val.toString();
      queryString += ")";
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(valID, val) {
      var queryString = "UPDATE burgers SET burger_name = '";
      queryString += val.toString();
      queryString += "' WHERE id = ";
      queryString += valID;
  
      connection.query(
        queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  