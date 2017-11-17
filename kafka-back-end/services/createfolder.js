var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/dropbox";
const fs = require('fs');
const fse = require('fs-extra');
var path = require('path');

function handle_request(msg, callback){

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
    mongo.myconnect(mongoURL, function(){
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('users');
        //   process.nextTick(function(){
        coll.findOne({username: msg.username}, function(err, user){
            if (err) {
                res.value = err;
                res.code = '500';
            }
            else {
                var Ufolder = '../public/uploads/'+msg.username;
                const dir = path.join(__dirname,Ufolder,msg.folder);
                const mkdirSync = function (dirPath) {
                    try {
                        fs.mkdirSync(dirPath)
                    } catch (err) {
                        if (err.code !== 'EEXIST') throw err
                    }
                }
                    mkdirSync(dir);
                    console.log("mkdir done");
                }});
                res.value =  msg;
                res.code = 200;

            console.log("inside try:" + res);
            callback(null, res)}
        );
        //  done (null, {username:username, password:password, firstname:req.body.firstname, lastname: req.body.lastname});


    };



exports.handle_request = handle_request;