import { Router } from "express";
import 'dotenv/config';
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthUserController } from "../controllers/AuthUserController";
import { CadastroServController } from "../controllers/CreateServiceController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { ListServicesController } from "../controllers/ListServicesController";
import { AppointmentController } from "../controllers/CreateAppointmentController";

const router = Router();

router.post("/cadastro", CreateUserController);
router.post("/login", AuthUserController);
router.post("/servicos", isAuthenticated, CadastroServController);
router.post("/agendamento", isAuthenticated, AppointmentController)

router.get("/services", ListServicesController);


export {router};