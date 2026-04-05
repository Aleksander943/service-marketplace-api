import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateProfissionalController } from "../controllers/CreateProfissinalController";

const router = Router();

router.post("/user", CreateUserController);

router.post("/profissional", CreateProfissionalController);

export {router};