import { prisma } from "../config/prisma";

interface InfoUserProps {
  userId: number;
  bio?: string;
  regiao?: string;
  profissao?: string;
  skills?: string[];
}

export const InfoUserServices = async ({
  userId,
  bio,
  regiao,
  profissao,
  skills,
}: InfoUserProps) => {
  const data: Record<string, any> = {};

  if (bio !== undefined) {
    data.bio = bio;
  }

  if (regiao !== undefined) {
    data.regiao = regiao;
  }

  if (profissao !== undefined) {
    data.profissao = profissao;
  }

  if (skills !== undefined) {
    data.skills = {
      deleteMany: {},
      create: skills.map((skill) => ({
        name: skill,
      })),
    };
  }

  return prisma.user.update({
    where: {
      id: userId,
    },
    data,
    include: {
      skills: true,
      services: true,
    },
  });
};
