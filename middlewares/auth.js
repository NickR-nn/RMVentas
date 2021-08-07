import tokenService from "../services/token";
export default {
  verifyUsuario: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No existe",
      });
    }
    const response = await tokenService.decode(req.headers.token)
    if(response.rol == "Administrador" || response.rol == "Vendedor"|| response.rol == "Almacenero"){
        next()
    }else{
        return res.status(404).send({
            message: "No existe el usuario",
        }); 
    }
  },
  verifyAdministrador: async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
          message: "No existe",
        });
      }
      const response = await tokenService.decode(req.headers.token)
      if(response.rol == "Administrador" ){
          next()
      }else{
          return res.status(404).send({
              message: "Usted no existe como admin",
          }); 
      }
  },
  verifyAlmacenero: async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
          message: "No existe",
        });
      }
      const response = await tokenService.decode(req.headers.token)
      if(response.rol == "Administrador" || response.rol == "Almacenero"){
          next()
      }else{
          return res.status(404).send({
              message: "No existe el almacenero buscado",
          }); 
      }
  },
  verifyVendedor: async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
          message: "No existe",
        });
      }
      const response = await tokenService.decode(req.headers.token)
      if(response.rol == "Administrador" || response.rol == "Vendedor"){
          next()
      }else{
          return res.status(404).send({
              message: "No existe el vendedor buscado",
          }); 
      }
  },
};
