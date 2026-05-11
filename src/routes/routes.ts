import { Router } from "express";
import 'dotenv/config';
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthUserController } from "../controllers/AuthUserController";
import { CadastroServController } from "../controllers/CreateServiceController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { ListServicesController } from "../controllers/ListServicesController";
import { AppointmentController } from "../controllers/CreateAppointmentController";
import { StatusAppointmentController } from "../controllers/StatusAppointmentController";
import { InfoUserController } from "../controllers/InfoUserController";
import { GetUserProfileController } from "../controllers/ListUserController";

const router = Router();

router.post("/cadastro", CreateUserController);
router.post("/login", AuthUserController);
router.post("/servicos", isAuthenticated, CadastroServController);
router.post("/agendamento", isAuthenticated, AppointmentController)

router.patch("/perfil", isAuthenticated, InfoUserController);

router.get("/services", ListServicesController);
router.get("/appointments/me", isAuthenticated, StatusAppointmentController);
router.get("/perfil", isAuthenticated, GetUserProfileController )

export {router};