var mysql = require("./mysql");
function handle_request(msg, callback) {

    var res = {};
    console.log("In handle request flights:" + JSON.stringify(msg)); 
    var payFlight = "insert into transactionFlights(bookID, flightID, amount, noOfSeats, cardNo, username) values ('"+msg.bookID+"','" + msg.flightID+"','" + msg.price+"','" + msg.passengerCount+"','" +msg.cardNo+"','" + msg.username+"')";
    console.log("Query is:" + payFlight);

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

                console.log("No Flights fetched with the given preferences");

                res.value = "404";
                res.message = "No Flights exists with the search criteria";
                callback(null,res);

            }
        }
    }, payFlight);

}

exports.handle_request = handle_request;