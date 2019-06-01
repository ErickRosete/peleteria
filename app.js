var express = require('express'),
    app = express()

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const morgan=require("morgan")
const bodyParser=require("body-parser")


//settings
// APP. SET VAMOS A AMACENARLE EL PUERTO (REVISAR SI EL SERVIDOR 
// TIENE UN PUERTO DEFINIDO SINO EL PUERTO SERA 3000
app.set("port",process.env.PORT || 3000)

//middlewares o funciones que se ejecutan cada vez que se recibe una peticion
// app.use(morgan("dev"));//app utiliza morgan para mostrar mensajes en consola en su config de dev
// app.use(bodyParser.json());//quiero entender lo que me envian a traves de json

//routes
var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);


//aqui irian los static files
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

app.listen(app.get("port"),()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

// SET PORT=3000
//http://127.0.0.1:3000/
// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log(process.env.PORT);
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

