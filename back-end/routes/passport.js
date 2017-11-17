var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongo = require("./mongo");
//var mongoURL = "mongodb://localhost:27017/dropbox";
var kafka = require('./kafka/client');

module.exports = passport.use('login', new LocalStrategy(function(username   , password, done) {
    console.log('in password');
    kafka.make_request('login_topic',{"username":username,"password":password}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            done(err,{});
        }
        else
        {
            if(results.code == 200){
                done(null,{username: username, password: password/*"bhavan@b.com",password:"a"*/});
            }
            else {
                done(null,false);
            }
        }
    });
    }));

module.exports = passport.use('signup', new LocalStrategy({
        usernameField : 'username',
        passwordField: 'password',
	    passReqToCallback : true
	  },
	  function(req, username, password, done) {

          kafka.make_request('signup_topic',{"username":username,"password":password, "firstname": req.body.firstName, "lastname": req.body.lastName}, function(err,results){
              console.log('in result');
              console.log(results);
              if(err){
                  done(err,{});
              }
              else
              {
                  if(results.code == 200){

                      done(null,true,{username: username, password: password, firstname: req.body.firstName, lastname:req.body.lastName/*"bhavan@b.com",password:"a"*/});
                  }
                  else {
                      done(null,false);
                  }
              }
          });
	    }));
	     
	    // Delay the execution of findOrCreateUser and execute 
	    // the method in the next tick of the event loop
	    