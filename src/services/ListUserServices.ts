import { prisma } from "../config/prisma";

export const GetUserProfileService = async (userId: number) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },

    include: {
      skills: true,
      services: true,
    },
  });
};