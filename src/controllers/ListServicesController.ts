import { Request, Response } from "express"
import { ListServicesService } from "../services/ListServicesService";

export const ListServicesController = async (req:Request, res:Response) => {
    const category = req.query.category as string;

    try{
        const resultado = await ListServicesService(category);
        res.status(200).json(resultado)
    }catch (err: any){
        res.status(400).json({ message: err.message || "Error" });
    }
    
}

