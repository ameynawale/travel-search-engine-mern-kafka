var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var mysql = require("./mysql");

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
//calculate the noOfDays
    var getUser="select amount from hotelDetails where hotelID='"+ msg.ID+"' ";
    console.log("Query is:"+getUser);

    mysql.fetchData(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            if(results.length > 0){
                console.log(results);
               // var bill_amount = results.amount * msg.roomCount;  //*noOfDays;

                res.value = "200";
                res.message= results;

            }
            else {

                console.log("Hotel doesnt exist");
                res.value= "404";
                res.message="Hotel doesnt exist";

            }
            console.log("inside try:" + res);
            callback(null, res);
        }
    },getUser);

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