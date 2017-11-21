var connection =  new require('./kafka/Connection');
var login = require('./services/login');
var list = require('./services/listdir');
var signup = require('./services/signup');
var hotel = require('./services/hotel');
var car = require('./services/car');
var hotelDes = require('./services/hotelDes');
var carDes = require('./services/carDes');
var bookCar = require('./services/bookCar');
var flight = require('./services/flight');
var flightDes = require('./services/flightDes');
var bookFlight = require('./services/bookFlight');
var payFlight = require('./services/payFlight');
//var topic_name = 'login_topic';
//var consumer = connection.getConsumer(topic_name);
var consumer_login = connection.getConsumer('login_topic');
var consumer_list = connection.getConsumer('list_topic');
var consumer_signup = connection.getConsumer('signup_topic');
var consumer_hotel = connection.getConsumer('hotel_topic');
var consumer_hotelDes = connection.getConsumer('hotelDes_topic');
var consumer_car = connection.getConsumer('car_topic');
var consumer_carDes = connection.getConsumer('carDes_topic');
var consumer_bookCar=connection.getConsumer('bookCar_topic');
var consumer_flight=connection.getConsumer('flight_topic');
var consumer_flightDes = connection.getConsumer('flightDes_topic');
var consumer_bookFlight = connection.getConsumer('bookFlight_topic');
var consumer_payFlight = connection.getConsumer('payFlight_topic');
/*var consumer3 = connection.getConsumer('upload_topic');
var consumer4 = connection.getConsumer('share_topic');
var consumer5 = connection.getConsumer('star_topic');
var consumer6 = connection.getConsumer('getstar_topic');
var consumer7 = connection.getConsumer('delstar_topic');
var consumer8 = connection.getConsumer('profile_topic');
var consumer9 = connection.getConsumer('folder_topic');
var consumer10 = connection.getConsumer('group_topic');*/

var producer = connection.getProducer();

console.log('server is running');
consumer_login.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer_list.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    list.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer_signup.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    signup.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});
consumer_hotel.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    hotel.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});
consumer_hotelDes.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    hotelDes.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});



consumer_carDes.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    carDes.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});
consumer_bookCar.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    bookCar.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});
consumer_car.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    car.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer_flight.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    flight.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer_flightDes.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    flight.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer_bookFlight.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    bookFlight.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});


consumer_payFlight.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    payFlight.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

/*consumer3.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    upload.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer4.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    share.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer5.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    star.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer6.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getstar.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer7.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    delstar.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer8.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    editprofile.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer9.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    createfolder.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });
});

consumer10.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    creategroup.handle_request(data.data, function(err,res){
        console.log('after handle'+res);
        var payloads = [
            { topic: data.replyTo,
                messages:JSON.stringify({
                    correlationId:data.correlationId,
                    data : res
                }),
                partition : 0
            }
        ];
        producer.send(payloads, function(err, data){
            console.log(data);
        });
        return;
    });

});
*/
