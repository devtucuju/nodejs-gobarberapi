import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUserSession = new AuthenticateUserService();

  const { user, token } = await authenticateUserSession.execute({
    email,
    password,
  });
  delete user.password;
  return response.json({ user, token });
});
export default sessionsRouter;
