import { Request, Response } from "express";
import { StatusAppointmentService } from "../services/StatusAppointmentService";

export const StatusAppointmentController = async (req: Request, res: Response) => {
  const user_id = req.user_id;

  try {
    const resultado = await StatusAppointmentService(user_id);
    res.status(200).json(resultado);
  } catch (err: any) {
    res.status(400).json({ message: err.message || "Error" });
  }
};
