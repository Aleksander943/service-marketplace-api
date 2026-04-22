import { prisma } from "../config/prisma";

export const ListServicesService = async (category?: string) => {

    const listar = await prisma.service.findMany({
        where: {
            category: category ? category : undefined
        }, include:{
            provider:true
    }
});

return listar
};