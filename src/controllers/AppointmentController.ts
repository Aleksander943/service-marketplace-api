import { Request, Response } from "express";
import {AppointmentsServices} from "../services/AppointmentServices"

export const AppointmentController = async (req: Request, res: Response) => {

    const {service_id, date} = req.body;
    const user_id = req.user_id;

    try{
        const resultado = await AppointmentsServices(service_id, user_id, date);
        res.status(200).json(resultado);
    }catch (err:any) {
        res.status(400).json({ message: err.message || "Error" });
    }

};