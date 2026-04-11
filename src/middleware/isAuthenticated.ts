import { Request, Response, NextFunction } from "express";
import { verify }   from "jsonwebtoken";

interface Payload {
  sub: string;
}

interface AuthRequest extends Request {
    user_id: string;
}


export const isAuthenticated = (req: AuthRequest, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(401).end();
        return;
    };

    const [, token] = authHeader.split(" ");

    const segredo = process.env.JWT_SECRET;
9
    try{
        const {sub} = verify(token, segredo as string) as Payload;

        req.user_id = sub;

        return next();
    }catch{
        return res.status(401).end();
    }
}