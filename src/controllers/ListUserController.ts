import { Request, Response } from "express";
import { GetUserProfileService } from "../services/ListUserServices";


export const GetUserProfileController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = Number(req.user_id);

    const user = await GetUserProfileService(userId);

    return res.status(200).json(user);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar perfil",
    });
  }
};