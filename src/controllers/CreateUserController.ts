import { CreatedUserService } from "../services/CreateUserService";

import { Request, Response } from "express";

export const CreateUserController = async (req: Request, res: Response) => {
  const { nome, email, password, role } = req.body;

  try {
    const result = await CreatedUserService(nome, email, password, role);
    res.status(201).json(result);
  } catch (err: any) {
    console.log(err); // <-- ADICIONE ISSO AQUI
    res.status(400).json({ message: err.message || "Error" });
  }
};
