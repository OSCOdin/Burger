var orm = require("../config/orm.js")

var burger = {
    selectAll: function(tableInput){
        orm.selectAll(tableInput, function(res){
            tableInput(res);
        })   
    },
    insertOne: function(val){
        orm.insertOne(val, function(res){
            tableInput(res);
        })
    },
    updateOne: function(valID, val){
        orm.updateOne(valID, val)
    }
};

module.exports = burger;