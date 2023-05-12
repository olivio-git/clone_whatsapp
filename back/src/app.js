const express=require("express");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const morgan=require("morgan");
const cors=require("cors");
const routes=require("./routes/index.js"); //importamos las rutas
require("./bd.js"); //importamos el archivo bd

const server=express();

server.name="API";
server.use(morgan("dev"));

server.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
server.use(bodyParser.json({limit:"50mb"}));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*'); //para que puedan conectarse desde otras apis
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use('/social',routes);
server.use(cors());
 

server.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message || err;
    console.log(err)
    res.status(status).send(message);
});

module.exports=server;