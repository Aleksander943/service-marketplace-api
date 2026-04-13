import { prisma } from "../config/prisma";

export const CadastroServServices = async (title: string, description: string, price: number, category: string, providerId: string, email : string) => {

  const user = await prisma.user.findFirst({
    where: { email },
  });

  if(!user || user?.role !== "PRESTADOR"){
    throw new Error("Você não tem permissão para cadastrar serviço");
  }

  const novoServico = await prisma.service.create({
    data: {
        title,
        description,
        price,
        category,
        provider: {
          connect: { id: user.id }
        }
    }
  });
  return(novoServico)
};
