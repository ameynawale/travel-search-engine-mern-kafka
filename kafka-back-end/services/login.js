var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
//var bcrypt = require('bcrypt');
var crypto = require('crypto');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('login');
        key = "273"
        var hash = crypto.createHmac('sha512', key); //encrytion using SHA512
        hash.update(msg.password);
        msg.password = hash.digest('hex');
        coll.findOne({username: msg.username, password: msg.password}, function (err, user) {
            if (user) {
                //  done(null,user/* {username: username, password: password}*/);
                res.code = "200";
                res.value = "Success Login";
                console.log(user);
                console.log(res.value);

            } else {
                //    done(null, false);
                res.code = "401";
                res.value = "Failed Login";
                console.log(res.value);
            }
            console.log("inside try:" + res);
            callback(null, res);
        });
    })
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