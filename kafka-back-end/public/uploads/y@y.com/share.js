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
    var usernames = msg.shareuser.split(',');
    console.log(usernames);
    var userfolder = path.join(__dirname,'..','public','uploads',msg.username,msg.item);
    console.log(userfolder);
    for(i = 0; i < usernames.length; i++) {
        //  sharetouser = 'C:/Users/thirt/eclipse-workspace-javascript/LoginAppReactJS/LoginAppReactJS/nodelogin/public/uploads/' + usernames[i] + '/' + req.body.activeItemName;
        sharetouser = path.join(__dirname,'..','public', 'uploads',usernames[i], msg.item);
        /*var getUser="insert into shareuser(username, foldername) values ('" + usernames[i] +"','" + req.param("activeItemName")+"')";*/
        console.log(sharetouser)  ;

        fse.copy(userfolder, sharetouser, function(err)  {
            if(err){
                return console.error(err)
            }
            res.code = "200";
            res.value = "sharing successful";
            console.log("inside try:" + res);
            callback(null, res);
        })


    }

};



exports.handle_request = handle_request;