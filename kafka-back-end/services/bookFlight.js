var mysql = require("./mysql");
function handle_request(msg, callback) {

    var res = {};
    console.log("In handle request flights:" + JSON.stringify(msg)); 
    var getPrice = "select price from flightDetails where flightID ='" + msg.flightID +"'and seatsCount >='"+msg.passengerCount+"'";
    console.log("Query is:" + getPrice);

    mysql.fetchData(function (err, results) {
        if (err) {
            throw err;
        }
        else {
            
            if (results.length > 0) {
                console.log("results");

                res.value = "200";
                res.message = results[0].price*msg.passengerCount;
                callback(null,res);

            }
            else {

                console.log("No Flights fetched with the given preferences");

                res.value = "404";
                res.message = "No Flights exists with the search criteria";
                callback(null,res);

            }
        }
    }, getPrice);

}

exports.handle_request = handle_request;