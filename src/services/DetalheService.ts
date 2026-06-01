import { prisma } from "../config/prisma";

export const detalheService = (id: number) => {
  return prisma.service.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
    },
  });
};