import {CreatedUserService} from "../services/CreateUserService";

import { Request,Response } from "express";

export const CreateUserController = async (req: Request, res: Response) => {
    const {nome, email, password} = req.body;

    try{
        const result = await CreatedUserService(nome, email, password)
        res.status(201).json(result)
    } catch {
        res.status(400).json({  message: ("Error") });
    }
	
};


