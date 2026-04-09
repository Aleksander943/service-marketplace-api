import { AuthUserServices } from "../services/AuthUserServices";
import { Request, Response } from "express";

export const AuthUserController = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    try{
        const resultado = await AuthUserServices(email,password);
        res.status(200).json(resultado);
    }catch(err: any){
        console.log(err);
        res.status(400).json({ message: err.message || "Error" });
    }

};