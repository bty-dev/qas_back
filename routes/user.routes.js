import {
    Router
} from "express";
import {
    changeUserName,
    getUserStats,
    loginUser,
    registerUser
} from "../controllers/user.controller.js";


const router = Router();

router.post('/api/login', loginUser)
    .get('/api/user/:id', getUserStats)
    .post('/api/register', registerUser)
    .post('/api/changeUserName/:id', changeUserName)
export default router;