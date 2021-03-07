import { Router } from 'express';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

/* Receber a informação
Enviar para outro arquivo
Devolve a informação
 */
// parseISO - converte uma string para um objeto Date do Javascript
// startOfHour - zera segundo, milissegundo etc ...Ex.: inicio 01:00:00
// isEqual - Verifica se duas datas são iguais, mesma data e horario

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticaded);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointmentsController.create);
export default appointmentsRouter;
