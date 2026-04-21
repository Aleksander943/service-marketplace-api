import { startOfHour, isBefore } from 'date-fns';
import { prisma } from '../config/prisma';

export const AppointmentsServices = async(service_id: string, user_id: string, date: string) =>{

    const appointmentDate = startOfHour(new Date(date));

    if(isBefore(appointmentDate, new Date())){
        throw new Error("Você não pode agendar uma data que já passou.");
    }

    const service = await prisma.service.findUnique({
        where:{ id: Number(service_id)}
    })
    
    if(!service){
        throw new Error("Serviço não encontrado")
    }

    if(service.userId === Number(user_id)){
        throw new Error("Não é permitido contratar o propio serviço")
    }

    const appointment = await prisma.appointment.create({
    data: {
      date: appointmentDate,
      serviceId: Number(service_id),
      clientId: Number(user_id),
    }
  });

  return appointment;

};