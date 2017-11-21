var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
var express = require('express');
var fs = require('fs');
//const fs = require('fs');
const fse = require('fs-extra');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './services')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({storage:storage});

function handle_request(msg, callback){

   var res = {};
    var response = "";
    testFolder = "./public/uploads/" + msg;
    console.log(msg);
    console.log(testFolder);
   // if (msg !== "undefined") {
        fs.readdir(testFolder, function (err, files) {
            if(err)
             return   console.log(err);
            //   console.log(files.length);

            else
            {
                console.log(files);
                for (var i = 0; i < files.length; i++) {
                    if (i < files.length - 1) {
                        response += files[i] + "<br>";
                    }
                    else {
                        response += files[i];
                    }
                }
                res.code = "200";
                res.value = response;
                console.log("inside try:" + res);
                callback(null, res);
            }
        });
    //}
    /*var resArr = [];
   // console.log(req.body.username);
    console.log(msg);
    console.log("services/" + msg.username+ "/!*");
    var pathtoFiles ="services/"+msg.username+"/!*";


        glob(pathtoFiles, function (er, files) {
            var resArr = files.map(function (file) {
                var imgJSON = {};
                imgJSON = file.split('/')[1];
                imgJSON.cols = 2  ;
                return imgJSON;
            });

            console.log(resArr);
            res.code = "201";
                res.value = resArr;
        });*/
        /*console.log("In handle request:" + JSON.stringify(msg));
        mongo.connect(mongoURL, function () {
            console.log('Connected to mongo at: ' + mongoURL);
            var coll = mongo.collection('login');*/

        /*coll.findOne({username: msg.username, password: msg.password}, function (err, user) {
            if (user) {
                //  done(null,user/!* {username: username, password: password}*!/);
                res.code = "200";
                res.value = "Success Login";
                console.log(user);
                console.log(res.value);

            } else {
                //    done(null, false);
                res.code = "401";
                res.value = "Failed Login";
                console.log(res.value);
            }*/
            /*console.log("inside try:" + res);
            callback(null, res);*/
       // });
    };
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


exports.handle_request = handle_request;