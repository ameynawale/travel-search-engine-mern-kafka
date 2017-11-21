//var mongo = require("./mongo");
//var mongoURL = "mongodb://localhost:27017/login";
var mysql = require('./mysql');
const fs = require('fs');
const fse = require('fs-extra');
var path = require('path');
var bcrypt = require('bcrypt');
var crypto = require('crypto');
var connection;
function handle_request(msg, callback){

 /*   var res = {};
    console.log("In handle request:" + JSON.stringify(msg));

    //mongo.myconnect(mongoURL, function(){
        console.log('Connected to mysql at: ' +connection);

       // var coll = mongo.collection('login');
           process.nextTick(function(){

        coll.findOne({username: msg.username}, function(err, user){

            if (err) {
                res.value = err;
                res.code = '500';


            }
            if (user)
            {
               // done(null, false, /*req.flash('signupMessage', 'the email already taken'));
                res.value = 'user already exists';
                res.code = '401';
            }
            else {
                var Ufolder = '../public/uploads/'+msg.username;
                const dir = path.join(__dirname,Ufolder);
                const mkdirSync = function (dirPath) {
                    try {
                        fs.mkdirSync(dirPath)
                    } catch (err) {
                        if (err.code !== 'EEXIST') throw err
                    }
                }
                var key ="273"
                var hash = crypto.createHmac('sha512', key); //encrytion using SHA512
                hash.update(msg.password);
                msg.password = hash.digest('hex');
                var myobj = {
                    username: msg.username,
                    password: msg.password,
                    firstname: msg.firstname,
                    lastname: msg.lastname
                };
                coll.insertOne(myobj, function (err, u) {
                    if (err) return err;
                    console.log("1 document inserted");
                    mkdirSync(dir);
                    console.log("mkdir done");
                    var starred = dir+'_star';
                    mkdirSync(starred); // for staring functionality
                    var groups = dir+'/groups';
                    mkdirSync(groups); // for groups functionality.
                     coll.close();
                    if(u)
                        {
                      done(null, true);

                       }
                });
                res.value =  msg;
                res.code = 200;
            }
            console.log("inside try:" + res);
            callback(null, res);
        }
              //  done (null, {username:username, password:password, firstname:req.body.firstname, lastname: req.body.lastname});


});*/
}




//exports.handle_request = handle_request;