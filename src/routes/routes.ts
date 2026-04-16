import { Router } from "express";
import 'dotenv/config';
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthUserController } from "../controllers/AuthUserController";
import { CadastroServController } from "../controllers/CreateSeviController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { ListServicesController } from "../controllers/ListServicesController";

const router = Router();

router.post("/cadastro", CreateUserController);
router.post("/login", AuthUserController);

router.post("/Servicos", isAuthenticated, CadastroServController)
router.get("/Servicos", ListServicesController)


export {router};