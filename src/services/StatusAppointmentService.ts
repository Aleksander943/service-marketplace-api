import { prisma } from "../config/prisma";

export const StatusAppointmentService = async (userId: string) => {
	const appointmentUserId = Number(userId);

	const appointments = await prisma.appointment.findMany({
		where: {
			OR: [
				{ clientId: appointmentUserId },
				{ service: { providerId: appointmentUserId } },
			],
		},
		include: {
			client: true,
			service: true,
		},
	});

	return appointments;
};