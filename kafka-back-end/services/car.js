//var mongo = require("./mongo");
//var mongoURL = "mongodb://localhost:27017/login";
//var bcrypt = require('bcrypt');
//var crypto = require('crypto');
var mysql = require("./mysql");
function handle_request(msg, callback){
     console.log("msg:"+msg.city);
    var res = {};
    console.log("handle request");
    console.log("In handle request : get list of cars based on the filter criteria" + JSON.stringify(msg));

  console.log("msg value after stringify:"+msg);

    var getUser="select * from carDetails where fromCity='"+msg["city"]+"' and date='"+msg["date"]+"' and toCity='"+msg["to"]+"'";

    console.log("Query is:"+getUser);

    mysql.fetchData(function(err,results){
        console.log(results.length);
        if(err){
            throw err;
        }
        else
        {
            console.log(results.length);
            if(results.length > 0){
                console.log(results);

                res.value = "200";
                res.message= results;
                //value="200";
                //message=results;
                //results.send(value,message);
                callback(null, res);
            }
            else {

                console.log("no cars fetched with the given preferences");

                res.value= "404";
                res.message="No cars exists with the criteria";
                callback(null,res);
            }
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