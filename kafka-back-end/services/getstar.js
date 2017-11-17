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

function handle_request(msg, callback) {

    var res = {};
    var response = "";
    testFolder = "./public/uploads/" + msg.username + "_star";
    console.log(msg);
    console.log(testFolder);
    // if (msg !== "undefined") {
    fs.readdir(testFolder, function (err, files) {
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
}


exports.handle_request = handle_request;