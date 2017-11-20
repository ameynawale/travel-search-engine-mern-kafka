var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var mysql = require("./mysql");
function handle_request(msg, callback){

    //var res = {};
    console.log("In handle request:" + JSON.stringify(msg));

    var getUser="insert into transactionHotels(hotelID,amount, noOfRooms, noOfGuests, cardNo) values ('"+msg.ID+"','" + msg.billAmount+"','" + msg.roomCount+"','" + msg.guestCount+"','" + msg.cardNo+"')";
    console.log("Query is:"+getUser); // TO CHECK HOW TO INSERT BOOKING id , SHOULD BE INSERT IT EXPLICITLY OR IT WILL AUTO INCREMENT IT? SHULD SEND BOOKING ID
                                      // AS A RESPONSE TO BACKEND. AND SEND IT FRONT END FROM THERE

    mysql.fetchData(function(err,results){ // WHAT WILL THE RESULTS PRINT. HAVE TO CHECK.
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

                console.log("insert valid details");
                res.value= "401";
                res.message="invalid details";

            }
        }
    },getUser);


}

exports.handle_request = handle_request;