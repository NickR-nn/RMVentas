const express = require("express"); // llamada a express
const morgan = require("morgan"); //llamada a morgan
const cors = require("cors"); //llamada acors
const app = express(); //se inica que se va a usar express
app.use(morgan("dev")); // Obtenemos las solicitudes enviadas a http
app.use(cors()); // Uso de Cors para AJAX
app.use(express.json()); //Uso JSON con Express
app.use(express.urlencoded({ extended: true })); // Escribir los identificadores de nombres y ubicaciones
app.set("port", process.env.PORT || 3000); //Envia un valor a ser verificado para el puerto en caso de estar ocupado el puerto por defecto mandara un valor aleatorio

app.listen(app.get("port"), () => {
  //ejecucion tipo flechas en el puerto indicado
  console.log("Servido r Ejecutandose en el puerto " + app.get("port")); //indicamos que se establece la conexion-segun el puerto indicado
});
