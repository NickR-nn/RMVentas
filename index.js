const express = require("express"); // llamada a express 
const morgan = require('morgan') //llamada a morgan
const app = express(); //se inica que se va a usar express
app.use(morgan('dev')) //


app.set("port", process.env.PORT || 3000);//Envia un valor a ser verificado para el puerto en caso de estar ocupado el puerto por defecto mandara un valor aleatorio

app.listen(app.get("port"), () => {
  //ejecucion tipo flechas en el puerto indicado
  console.log("Servidor Ejecutandose en el puerto " + app.get("port")); //indicamos que se establece la conexion-segun el puerto indicado
});
