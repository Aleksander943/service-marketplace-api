import { Router } from "express";
import 'dotenv/config';
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthUserController } from "../controllers/AuthUserController";
import { isAuthenticated } from "../middleware/isAuthenticated";

const router = Router();

router.post("/Cadastro", CreateUserController);
router.post("/login", AuthUserController);

router.post("/criarServicos", isAuthenticated)
router.post("/agendamento", isAuthenticated)


export {router};