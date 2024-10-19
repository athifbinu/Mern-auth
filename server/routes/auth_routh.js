import exprees from "express";
import { sinup } from "../controllers/auh.control.js";

const router = exprees.Router();

router.post("/signup", sinup);

export default router;
