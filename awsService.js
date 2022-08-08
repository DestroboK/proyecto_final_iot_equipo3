const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/57cda8dfcaf75913a303df7f51923db8a1fabbde721dad97796cdce13a7a07e3-private.pem.key',
  certPath: './awsCerts/57cda8dfcaf75913a303df7f51923db8a1fabbde721dad97796cdce13a7a07e3-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a2hwznw7teweg8-ats.iot.us-east-1.amazonaws.com',
  clientId: 'objeto_equipo3',
  region: 'us-east-1',
});



module.exports = { device };
