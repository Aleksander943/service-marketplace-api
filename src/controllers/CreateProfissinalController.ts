import { Request, Response } from "express";
import { CreateProfissionalService } from "../services/CreateProfissionalService";

export const CreateProfissionalController = async(req:Request, res:Response) =>{

    const { nome, email, password } = req.body;

    try {
        const resultado  = await CreateProfissionalService(nome, email, password);
        res.status(201).json(resultado);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Erro ao criar profissional";
        res.status(400).json({ message });
    }
}