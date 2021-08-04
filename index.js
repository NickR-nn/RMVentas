import express from "express";
// const express = require("express"); // llamada a express
import morgan from "morgan";
// const morgan = require("morgan"); //llamada a morgan
import cors from "cors";
// const cors = require("cors"); //llamada acors
import path from "path";
import conectarDB from "./config/db";//importar la funcion

//Conexión a la Base de Datos
conectarDB();

const app = express(); //se inica que se va a usar express
app.use(morgan("dev")); // Obtenemos las solicitudes enviadas a http
app.use(cors()); // Uso de Cors para AJAX

app.use(express.json()); //Uso JSON con Express
app.use(express.urlencoded({ extended: true })); // Escribir los identificadores de nombres y ubicaciones
app.use(express.static(path.join(__dirname, "public"))); //

app.set("port", process.env.PORT || 3000); //Envia un valor a ser verificado para el puerto en caso de estar ocupado el puerto por defecto mandara un valor aleatorio
app.get('/gonchilqq', function (req, res) {
  res.send('Hello World!');// luego de / son las rutas
});
app.listen(app.get("port"), () => {
  //ejecucion tipo flechas en el puerto indicado
  console.log("Servidor Ejecutandose en el puerto " + app.get("port")); //indicamos que se establece la conexion-segun el puerto indicado
  console.log(path.join(__dirname, "public"));
});
