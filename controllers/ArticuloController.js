import models from "../models";
export default {
  /*
    //req argumento de soliditud
    //res '' de respuesta
    //
    */
  add: async (req, res, next) => {
    try {
      const reg = await models.Articulo.create(req.body);
      res.status(200).json(reg); //lo de body viene
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //agragar una categoria
  query: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findOne({ _id: req.query._id })
      .populate("categorias",{nombre:1})
      if (reg === null) {
        res.status(404).send({
          message: "No existe coincidencias",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //consultar una categoria
  list: async (req, res, next) => {
    try {
      let valor = req.query.valor;
      const reg = await models.Articulo.find(
        {
          $or: [
            { nombre: new RegExp(valor, "i") },
            { descripcion: new RegExp(valor, "i") },
          ],
        },
        { createdAt: 0 }
      )
      .populate("categorias",{nombre:1}) //llama a la otra tabla por su coleccion,sengundo parametro que campos trae
      .sort({ createdAt: -1 });
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //listar categorias
  update: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findByIdAndUpdate(
        { _id: req.body._id },
        { categoria:req.body.categoria, codigo:req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, precio_venta: req.body.precio_venta, stock: req.body.stock}
      ); //body te sugiere
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //actualizar categorias
  remove: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findByIdAndDelete({
        _id: req.body._id,
      });
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //borrar o remover categorias
  activate: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findByIdAndUpdate(
        { _id: req.query._id },
        { estado: 1 }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //activar categorias
  desactivate: async (req, res, next) => {
    try {
      const reg = await models.Articulo.findByIdAndUpdate(
        { _id: req.query._id },
        { estado: 0 }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Algo fall0...",
      });
      next(error);
    }
  }, //desactivar categorias
};
