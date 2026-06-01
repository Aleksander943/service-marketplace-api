import { Request , Response} from "express";
import { detalheService } from "../services/DetalheService";


export const getServiceById = async (req: Request , res: Response) => {
  const id = Number(req.params.id);

  const service = await detalheService(id);

  if (!service) {
    return res.status(404).json({
      message: "Serviço não encontrado",
    });
  }

  return res.json(service);
};