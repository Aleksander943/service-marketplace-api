import { Router } from "express";
import 'dotenv/config';
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthUserController } from "../controllers/AuthUserController";

const router = Router();

router.post("/Cadastro", CreateUserController);
router.post("/login", AuthUserController);

export {router};