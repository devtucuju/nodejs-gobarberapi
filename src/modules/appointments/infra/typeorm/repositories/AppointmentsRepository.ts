// import { startOfHour, parseISO, isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmnetsRepository';
import Appointment from '../entities/Appointment';

// interface CreateAppointmentDTO {
//   provider: string;
//   date: Date;
// }
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>
  implements IAppointmentsRepository {
  public async findBydate(date: Date): Promise<Appointment | undefined> {
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
