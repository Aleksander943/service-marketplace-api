import { prisma } from "../config/prisma";

export const CreateProfissionalService = async ( nome: string, email: string, password: string) => {

    if(!email){
        throw new Error("E-mail é necessário!");
    }

    const emUso = await prisma.profissional.findFirst({
        where: { email },
    });

    if(emUso){
        throw new Error("Usuário já cadastrado!")
    }

    const created = await prisma.profissional.create({
        data: {
            nome,
            email,
            password,
        },
        select:{
            id: true,
            nome: true,
            email: true,
        },    
    });
    return created
};