import { Request, Response } from "express";
import { CadastroServServices } from "../services/CreateServServices";

export const CadastroServController = async (req: Request, res: Response) => {
  const { title, description, price, category } = req.body;

  const user_id = req.user_id;

  try {
    const resultado = await CadastroServServices(
      title,
      description,
      price,
      category,
      user_id,
    );
    res.status(201).json(resultado);
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ message: err.message || "Error" });
  }
};
