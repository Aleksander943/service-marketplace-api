import { Request, Response } from "express";
import { InfoUserServices } from "../services/InfoUserServices";

export const InfoUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = Number(req.user_id);

    const { bio, regiao, profissao, skills } = req.body;

    const resultado = await InfoUserServices({
      userId,
      bio,
      regiao,
      profissao,
      skills,
    });

    return res.status(200).json(resultado);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao atualizar perfil",
    });
  }
};