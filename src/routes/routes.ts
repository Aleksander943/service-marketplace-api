import { Router } from "express";
import 'dotenv/config';
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthUserController } from "../controllers/AuthUserController";
import { CadastroServController } from "../controllers/CreateSeviController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { ListServicesController } from "../controllers/ListServicesController";
import { AppointmentController } from "../controllers/AppointmentController";

const router = Router();

router.post("/cadastro", CreateUserController);
router.post("/login", AuthUserController);
router.post("/Servicos", isAuthenticated, CadastroServController);
router.post("/agendamento", isAuthenticated, AppointmentController)

router.get("/Servicos", ListServicesController);


export {router};