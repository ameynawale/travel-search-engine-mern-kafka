var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
const fs = require('fs');
const fse = require('fs-extra');
var path = require('path');
var bcrypt = require('bcrypt');
var crypto = require('crypto');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
    mongo.myconnect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('login');
        //   process.nextTick(function(){
        coll.findOne({username: msg.username}, function(err, user){
            if (err) {
                res.value = err;
                res.code = '500';


            }
            if (user)
            {
                key = "273"
                var hash = crypto.createHmac('sha512', key); //encrytion using SHA512
                hash.update(msg.password);
                msg.password = hash.digest('hex');

                coll.updateOne(
                    {username: msg.username},
                    {
                        $set: {password: msg.password, firstname: msg.firstname, lastname: msg.lastname, contact: msg.contact, education: msg.education, interests: msg.interests}
                    }
                );

                res.value =  msg;
                res.code = 200;

            }
            console.log("inside try:" + res);
            callback(null, res);
        });
        //  done (null, {username:username, password:password, firstname:req.body.firstname, lastname: req.body.lastname});


    });
}



exports.handle_request = handle_request;