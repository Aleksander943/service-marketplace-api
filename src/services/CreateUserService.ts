import { prisma } from "../config/prisma";

export const CreatedUserService = async (nome: string, email: string, password: string ) => {
    
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
        },
        select:{
            id: true,
            name: true,
            email: true,
        }
    });

    return User
};

