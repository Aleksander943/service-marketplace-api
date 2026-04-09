import { prisma } from "../config/prisma";
import { hash } from "bcrypt";

export const CreatedUserService = async (nome: string, email: string, password: string, role: "CLIENTE" | "PRESTADOR") => {
    
    if(!email){
       throw new Error("Email é obrigatório");
    };

    const userExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if(userExist){
        throw new Error("Usuário já cadastrado");
    };

    const passwordHash = await hash(password, 10);

    const User = await prisma.user.create({
        data: {
            name: nome,
            email,
            password: passwordHash,
            role,
        },
        select:{
            id: true,
            name: true,
            email: true,
            role: true
        }
    });

    return User
};

