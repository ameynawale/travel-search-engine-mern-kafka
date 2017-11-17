var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/login";
var express = require('express');
var fs = require('fs');
//const fs = require('fs');
const fse = require('fs-extra');
var multer = require('multer');
var path = require('path');
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
    console.log(" in handle request");
    console.log(msg);
    testFolder = "../public/uploads/" + msg.username +"_star";
    const userfolder = path.join(__dirname,testFolder);
    // var userfolder = path.join(__dirname,'..','public','uploads',msg.username,msg.item);
    console.log(userfolder);
    testFolder1 = "../public/uploads/" + msg.username + "_star/" + msg.item;
    starUser = path.join(__dirname,testFolder1);
    /*var getUser="insert into shareuser(username, foldername) values ('" + usernames[i] +"','" + req.param("activeItemName")+"')";*/
    console.log(starUser);

    fse.remove(starUser, function(err){
        if (err) return console.error(err);

        console.log("success!");
    });
    fs.readdir(userfolder, function (err, files) {
        //   console.log(files.length);
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
    });


};



exports.handle_request = handle_request;