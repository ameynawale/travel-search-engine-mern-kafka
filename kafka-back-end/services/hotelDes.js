var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var mysql = require("./mysql");
function handle_request(msg, callback) {

    //var res = {};
    console.log("In handle request:" + JSON.stringify(msg));

    var getUser = "select * from hotelDetails where HotelId ='" + msg.ID + "'";
    console.log("Query is:" + getUser);

    mysql.fetchData(function (err, results) {
        if (err) {
            throw err;
        }
        else {
            if (results.length > 0) {
                console.log("results");

                res.value = "200";
                res.message = results;

            }
            else {

                console.log("no hotels fetched with the given preferences");

                res.value = "404";
                res.message = "No hotel exists with the criteria";

            }
        }
    }, getUser);

}

exports.handle_request = handle_request;