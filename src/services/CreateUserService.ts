import { prisma } from "../config/prisma";

export const CreatedUserService = async (nome: string, email: string, password: string, role: "CLIENTE" | "PRESTADOR") => {
    
    if(!email){
       throw new Error("Email é obrigatório");
    };

    const UserExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if(UserExist){
        throw new Error("Usuário já cadastrado");
    };

    const User = await prisma.user.create({
        data: {
            name: nome,
            email,
            password,
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

