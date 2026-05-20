import { Request, Response } from "express";
import { InfoUserServices } from "../services/InfoUserServices";

export const InfoUserController = async (
  req: Request,
  res: Response
) => {
  try {

    if (!req.user_id) {
      return res.status(401).json({
        error: "Usuário não autenticado",
      });
    }

    const userId = Number(req.user_id);

    const {
      bio,
      regiao,
      profissao,
      skills
    } = req.body;

    if (
      bio === undefined &&
      regiao === undefined &&
      profissao === undefined &&
      skills === undefined
    ) {
      return res.status(400).json({
        error: "Nenhum dado enviado",
      });
    }

    if (
      skills !== undefined &&
      !Array.isArray(skills)
    ) {
      return res.status(400).json({
        error: "Skills precisa ser um array",
      });
    }

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