import routerx from "express-promise-router";
import personaController from "../controllers/PersonaController";
import auth from "../middlewares/auth";
const router = routerx();

router.post("/add", auth.verifyusuario, personaController.add);
router.get("/query", auth.verifyusuario, personaController.query);
router.get("/list", auth.verifyusuario, personaController.list);
router.get("/listClientes", auth.verifyusuario, personaController.list);
router.get("/listProveedores", auth.verifyusuario, personaController.list);
router.put("/update", auth.verifyusuario, personaController.update);
router.delete("/remove", auth.verifyusuario, personaController.remove);
router.put("/activate", auth.verifyusuario, personaController.activate);
router.put("/deactivate", auth.verifyusuario, personaController.deactivate);

export default router;