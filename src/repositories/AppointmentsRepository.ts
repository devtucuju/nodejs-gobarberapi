// import { startOfHour, parseISO, isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

// interface CreateAppointmentDTO {
//   provider: string;
//   date: Date;
// }
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    // Verificar se já tem agendamento na mesma data e horário
    // const findAppointment = this.appointments.find(appointment =>
    //   isEqual(date, appointment.date),
    // );
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}
export default AppointmentsRepository;
