import { Router } from "express";
import { createRoom } from "../handler/roomHandler";

const router : Router = Router();


router.post('/create',createRoom)

export default router;