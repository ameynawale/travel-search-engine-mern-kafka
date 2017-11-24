var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');
require('./routes/passport');

var routes = require('./routes/index');
var users = require('./routes/users');
var mongoSessionURL = "mongodb://localhost:27017/sessions";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo/es5")(expressSessions);
//var kafka = require('kafka');
var kafka = require('./routes/kafka/client');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSessions({
    secret: "CMPE273_passport",
    resave: false,
    //Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, //force to save uninitialized session to db.
    //A session is uninitialized when it is new but not modified.
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 6 * 1000,
    store: new mongoStore({
        url: mongoSessionURL
    })
}));
app.use(passport.initialize());
app.use(passport.session());

//method to serialize user for storage
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

// method to de-serialize back for auth
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
     done(err, user);
  });
});

app.use('/', routes);
app.use('/users', users);

app.post('/logout', function(req,res) {
    console.log(req.session.user);
    req.session.destroy();
    console.log('Session Destroyed');
    res.status(200).send();
});

function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24
    var date1P = Date.parse(date1);
    var date2P = Date.parse(date2);
    console.log(date1P);
    console.log(date2P);
    // Convert both dates to milliseconds
    /* var date1_ms = date1P.getTime();
     var date2_ms = date2P.getTime();*/

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1P - date2P)

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)

}
app.post('/login', function(req, res) {
    passport.authenticate('login', function(err, user) {
        if(err) {
            res.status(500).send();
        }

        if(!user) {
            res.status(401).send();
        }
        else {
            req.session.user = user.username;
            console.log(user);
            console.log("session initilized");
            res.status(201).send();
        }
    })(req,res);
});

app.post('/signup',function(req,res){
	passport.authenticate('signup', function(err,user){
		if(err){
			res.status(500).send();
		}
		if(user === false){
			res.status(401).send();
		}
		else {
			res.status(201).send();
		}
	})(req,res);
});

app.post('/hotel', function(req, res) {
    console.log(req.body.hotelID);


    kafka.make_request('hotelDes_topic',{"ID":req.body.hotelID}, function(err,results) {
        console.log('in result');
        console.log(results);

        if (err) {
            res.status(500).send();
        }
        else {
            if (results.code == 200) {
                //  done(null,true,results/*{username: username, password: password});
                console.log(results.value);

                var res1 = results.value;

                res.status(201).send({file: res1});
            }
        }
    });
});
app.post('/hotelDetails', function(req, res) {
    console.log(req.body.city);
    console.log(req.body.fromDate);
    console.log(req.body.toDate);
    console.log(req.body.guestCount);
    console.log(req.body.roomCount);

    kafka.make_request('hotel_topic',{"city":req.body.city,"from":req.body.fromDate, "to":req.body.toDate, "guestCount": req.body.guestCount,
        "roomCount": req.body.roomCount}, function(err,results) {
        console.log('in result');
        console.log(results);

        if (err) {
            res.status(500).send();
        }
        else {
            if (results.code == 200) {
                //  done(null,true,results/*{username: username, password: password});
                console.log(results.value);

                var res1 = results.value;

                res.status(201).send({file: res1});
            }
        }
    });
});


app.post('/car', function(req, res) {

 console.log("in car api");
  //  console.log(req.body.city);
  //  console.log(req.body.date);
  //  console.log(req.body.to);


    kafka.make_request('car_topic',{"location":req.body.location,"startDate":req.body.startDate,"endDate":req.body.endDate,"seatCount":req.body.seatCount}, function(err,results) {
        console.log('in result');
        console.log(results);

        if (err) {
            res.status(500).send();
        }
        else {
            if (results.value == 200) {
                //  done(null,true,results/*{username: username, password: password});
                console.log(results.value);

                var res1 = results.value;

                res.status(200).send({message: results});
            }
        }
    });
});
app.post('/carDetails', function(req, res) {
    console.log(req.body.city);
    console.log(req.body.fromDate);
    console.log(req.body.toDate);
    console.log(req.body.guestCount);
    console.log(req.body.roomCount);

    kafka.make_request('carDes_topic',{"carID":req.body.carID}, function(err,results) {
        console.log('in result');
        console.log(results);

        if (err) {
            res.status(500).send();
        }
        else {
            if (results.value == 200) {
                //  done(null,true,results/*{username: username, password: password});
                console.log(results.value);



                res.status(200).send({results: results});
            }
        }
    });
});
app.post('/bookCar', function(req, res) {
    console.log(req.body.carID);
    console.log(req.body.location);
    console.log(req.body.startDate);
    console.log(req.body.endDate);
    console.log(req.body.seatCount);
    var days = days_between(req.body.startDate,req.body.endDate);
    console.log("number of days needed:"+days);
    kafka.make_request('bookCar_topic',{"carID":req.body.carID,"location":req.body.location,"startDate":req.body.startDate, "endDate":req.body.endDate, "seatCount": req.body.seatCount,days:days}, function(err,results) {
        console.log('in result');
        console.log(results);

        if (err) {
            console.log("ERROR");
            res.status(500).send();
        }
        else {
            if (results.value == 200) {
                //  done(null,true,results/*{username: username, password: password});
                console.log(results.message[0]);

              //  var res1 = results.value;
                 var res2 = results.message[0];
                 var bill_amount=res2.price * days;
                 console.log("bill amount: "+bill_amount);
                res.status(200).send({bill_amount: bill_amount,carID:req.body.carID,seatCount:req.body.seatCount,startDate:req.body.startDate,endDate:req.body.endDate,location:req.body.location});
            }
        }
    });
});
app.post('/payCar', function(req, res) {
    console.log(req.body.carID);
    console.log(req.body.startDate);
    console.log(req.body.endDate);
    console.log(req.body.seatCount);
    //console.log(req.body.roomCount);
    console.log(req.body.billAmount);
    console.log(req.body.cardNo);

    kafka.make_request('payCar_topic',{"carID": req.body.carID, "seatCount": req.body.seatCount, "startDate" : req.body.startDate,
        "endDate": req.body.endDate,"location":req.body.location,"billAmount": req.body.billAmount, "cardNo":req.body.cardNo, "username": req.body.username}, function(err,results) {
        console.log('in result');
        console.log(results);

        if (err) {
            res.status(500).send();
        }

        if (results.value == 201) {
            //  done(null,true,results/*{username: username, password: password}*/);
            console.log("in 201 " + results.message);

            var res1 = results.message;

            res.status(201).send({results: results, message: "booking confirmed with booking ID: ", carID: req.body.carID, seatCount: req.body.seatCount, startDate : req.body.startDate,
                endDate: req.body.endDate, cardNo : req.body.cardNo, location: req.body.location, billAmount: req.body.billAmount});
            if (results.value == 401) {
                //  done(null,true,results/*{username: username, password: password}*/);
                console.log(results.message);

                var res1 = results.message;

                res.status(201).send({
                    file: res1,
                    city: req.body.city,
                    fromDate: req.body.fromDate,
                    toDate: req.body.toDate,
                    guestCount: req.body.guestCount,
                    roomCount: req.body.roomCount
                });
            }
        }
    });
});
module.exports = app;
