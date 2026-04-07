import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const router = Router();

router.post("/users", CreateUserController);


export {router};