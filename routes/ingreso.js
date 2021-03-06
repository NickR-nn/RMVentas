import routerx from "express-promise-router";
import ingresoController from "../controllers/IngresoController";
import auth from "../middlewares/auth";

const router = routerx();

router.post("/add", auth.verifyAlmacenero, ingresoController.add);
router.get("/query", auth.verifyAlmacenero, ingresoController.query);
router.get("/list", auth.verifyAlmacenero, ingresoController.list);
router.get("/grafico", auth.verifyUsuario, ingresoController.graficodocemeses);
router.get("/consultaFechas", auth.verifyUsuario, ingresoController.consultaFechas);
router.put("/activate", auth.verifyAlmacenero, ingresoController.activate);
router.put("/desactivate", auth.verifyAlmacenero, ingresoController.desactivate);

export default router;
