var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
const fs = require('fs');
const fse = require('fs-extra');
var path = require('path');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
    mongo.connect(mongoURL, function(){
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
               // done(null, false, /*req.flash('signupMessage', 'the email already taken')*/);
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
                    //  coll.close();
                    /*if(u)
                        {
                      done(null, true);

                       }*/
                });
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