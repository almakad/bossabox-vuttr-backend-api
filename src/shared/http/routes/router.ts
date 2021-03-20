import { Router } from 'express';
import toolsRouter from '../../../modules/tools/routes/tools.routes';
import sessionRoutes from '../../../modules/users/routes/login_users.routes';
import usersRouter from '../../../modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/users', sessionRoutes);

routes.use('/tools', toolsRouter);
export default routes;
