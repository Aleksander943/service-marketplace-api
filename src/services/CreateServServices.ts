import { prisma } from "../config/prisma";

export const CadastroServServices = async (
  title: string,
  description: string,
  price: number,
  category: string,
  user_id: string,
) => {
  const userIdNumber = Number(user_id);

  if (Number.isNaN(userIdNumber)) {
    throw new Error("Usuário inválido");
  }

  const user = await prisma.user.findFirst({
    where: { id: userIdNumber },
  });

  if (!user || user?.role !== "PRESTADOR") {
    throw new Error("Você não tem permissão para cadastrar serviço");
  }

  const novoServico = await prisma.service.create({
    data: {
      title,
      description,
      price,
      category,
      provider: {
        connect: { id: user.id },
      },
    },
  });
  return novoServico;
};
