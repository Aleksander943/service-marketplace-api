import { prisma } from "../config/prisma";

interface InfoUserProps {
  userId: number;
  bio: string;
  regiao: string;
  profissao: string;
  skills: string[];
}

export const InfoUserServices = async ({
  userId,
  bio,
  regiao,
  profissao,
  skills,
}: InfoUserProps) => {

  return prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      bio,
      regiao,
      profissao,

      skills: {
        deleteMany: {},

        create: skills.map((skill) => ({
          name: skill,
        })),
      },
    },

    include: {
      skills: true,
      services: true,
    },
  });
};