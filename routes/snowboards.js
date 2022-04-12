import { Router } from "express";
import * as controllers from "../controllers/snowboards.js";

const router = Router();

router.get("/snowboards", controllers.getSnowboards);
router.get("/snowboards/:id", controllers.getSnowboard);
router.post("/snowboards", controllers.createSnowboard);
router.put("/snowboards/:id", controllers.updateSnowboard);
router.delete("/snowboards/:id", controllers.deleteSnowboard);

export default router;