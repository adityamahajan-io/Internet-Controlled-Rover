var express = require('express')
var app = express();
var router = express.Router()
var bodyParser = require('body-parser')
var SerialPort = require("serialport");

//----------------------------------------------------------------

var arduinoCOMPort = "COM3";
var arduinoSerialPort = new SerialPort(arduinoCOMPort, {  
    baudrate: 9600
   });


   

app.use(express.static(__dirname+ "/public"))
app.set('view engine', 'ejs')
app.set("views", __dirname+"/views")
app.use(bodyParser.urlencoded({ extended: true }))

//----------------------------------------------------------------
//---------------Define Routes--------------
const homeRoute = require("./routes/home")

//---------------Use Routes-----------------
app.use("/", homeRoute)
//----------------------------------------------------------------
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server running on port 8000")
})
