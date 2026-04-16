import { prisma } from "../config/prisma";

export const ListServicesService = async (category?: string) => {

    const listar = await prisma.service.findMany({
        where: {
            category: category
        }, include:{
            provider:true
    }
});

return listar
};