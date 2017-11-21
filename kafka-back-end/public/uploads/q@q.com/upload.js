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
    testFolder = "../public/uploads/" + msg.username +"/" + msg.file;
    const dir = path.join(__dirname,testFolder);
    console.log(msg);
    console.log(dir);
    ufolder = msg.path;
    fse.move(ufolder, dir, function(err)  {
        if(err){
            return console.error(err)
        }
        res.code = "200";
        res.value = msg.username;
        console.log("inside try:" + res);
        callback(null, res);
    })

};



exports.handle_request = handle_request;