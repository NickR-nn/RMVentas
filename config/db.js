import mongoose from "mongoose";
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true, //para conexion por url
      useUnifiedTopology: true, //se indica la utlizacion de la tipologia
      useFindAndModify: false, //no se puede modificar
      useCreateIndex: true, //Cracion de index y llaves
    });
    console.log("DB Conectada"); //mensaje de que si funciona
  } catch (error) {
    console.log("Hubo un Error...Intente de Nuevo"); //mensaje de que no funciona
    console.log(error); //mostrar el error
    process.exit(1); //salida
  }
};

module.exports = conectarDB;//exportacion de funcion conectar db
