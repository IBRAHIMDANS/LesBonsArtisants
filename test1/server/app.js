import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import fileUpload from 'express-fileupload'
import indexRouter from "./routes/index.js"


const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
app.use(fileUpload());

app.use('/', indexRouter);



app.listen(8080,() =>{
  console.log('server is running in 0.0.0.0:8080 :)');
  
})

module.exports = app;
