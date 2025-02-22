import { Router } from "express";
import { signup, login } from "../handler/authHandler";

const router : Router = Router();

router.post('/signup', signup);
router.post('/login', login)

export default router;