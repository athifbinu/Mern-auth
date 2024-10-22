import exprees from "express";
import { sinup } from "../controllers/auh.control.js";

const router = exprees.Router();

router.post("/signup", sinup);
router.post("/signin", sinup);

export default router;
