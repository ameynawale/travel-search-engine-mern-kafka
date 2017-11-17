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
    testFolder = "../public/uploads/" + msg.username +"/" + msg.item;
    const userfolder = path.join(__dirname,testFolder);
   // var userfolder = path.join(__dirname,'..','public','uploads',msg.username,msg.item);
    console.log(userfolder);
    testFolder1 = "../public/uploads/" + msg.username + "_star/" + msg.item;
        starUser = path.join(__dirname,testFolder1);
        /*var getUser="insert into shareuser(username, foldername) values ('" + usernames[i] +"','" + req.param("activeItemName")+"')";*/
        console.log(starUser);

        fse.copy(userfolder, starUser, function(err)  {
            if(err){
                return console.error(err)
            }
            else {
                res.code = "200";
                res.value = "staring successful";
                console.log("inside try:" + res);
                callback(null, res);
            }
        })


};



exports.handle_request = handle_request;