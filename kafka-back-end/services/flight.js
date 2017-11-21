var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var mysql = require("./mysql");
function handle_request(msg, callback){

    //var res = {};
    console.log("In handle request:" + JSON.stringify(msg));

    var getFlights = "select * from flightDetails where flightID = '"+msg.flightId+"'and fromCity='"+msg.fromCity+"'and toCity'"+msg.toCity+
    "'and fromDate='"+ msg.departureDate+"'and toDate='"+ msg.returnDate+"'and seatType='"+ msg.seatType+"'seatsCount='"+msg.passengerCount+"'";
    console.log("Query is:"+getFlights);

    mysql.fetchData(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            if(results.length > 0){
                console.log("results");

                res.value = "200";
                res.message= results;

            }
            else {

                console.log("No flights fetched with the given preferences");

                res.value= "404";
                res.message="No flights exist within the search criteria";

            }
        }
    },getFlights);

    /*   }
   catch (e){
       done(e,{});
   }*/
    /*if(msg.username == "bhavan@b.com" && msg.password =="a"){
        res.code = "200";
        res.value = "Success Login";

    }
    else{
        res.code = "401";
        res.value = "Failed Login";
    }*/
    /*console.log("outside try:" + res);
    callback(null, res);*/
}

exports.handle_request = handle_request;