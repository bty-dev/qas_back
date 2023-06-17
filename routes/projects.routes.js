import {
    Router
} from "express";
import {
    getAll
} from "../controllers/projects.controller.js";
const router = Router();

router.get('/api/projects', getAll)

export default router;