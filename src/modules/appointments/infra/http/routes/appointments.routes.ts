import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointments/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

/* Receber a informação
Enviar para outro arquivo
Devolve a informação
 */
// parseISO - converte uma string para um objeto Date do Javascript
// startOfHour - zera segundo, milissegundo etc ...Ex.: inicio 01:00:00
// isEqual - Verifica se duas datas são iguais, mesma data e horario

const appointmentsRouter = Router();
appointmentsRouter.use(ensureAuthenticaded);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});
export default appointmentsRouter;
