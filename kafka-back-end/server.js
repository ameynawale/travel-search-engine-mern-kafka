var connection =  new require('./kafka/Connection');

var car = require('./services/car');
var carDes = require('./services/carDes');
var bookCar = require('./services/bookCar');
var payCar = require('./services/payCar');

var consumer_car = connection.getConsumer('car_topic');
var consumer_carDes = connection.getConsumer('carDes_topic');
var consumer_bookCar=connection.getConsumer('bookCar_topic');
var consumer_payCar=connection.getConsumer('payCar_topic');

var producer = connection.getProducer();

console.log('server is running');

consumer_car.on('message', function (message) {
    console.log('message received consumer_car');
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

consumer_carDes.on('message', function (message) {
    console.log('message received consumer_carDesc');
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
    console.log('message received consumer_bookCar');
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


consumer_payCar.on('message', function (message) {
    console.log('message received consumer_payCar');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    payCar.handle_request(data.data, function(err,res){
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

       
            

