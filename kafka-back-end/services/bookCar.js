var mysql = require("./mysql");
function handle_request(msg, callback) {

    var res = {};
    console.log("In handle request cars:" + JSON.stringify(msg));

    var getUser = "select * from carDetails where carID ='" + msg["carID"] +"'";
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
                callback(null,res);

            }
            else {

                console.log("no cars fetched with the given preferences");

                res.value = "404";
                res.message = "No car exists with the criteria";
                callback(null,res);

            }
        }
    }, getUser);

}

exports.handle_request = handle_request;