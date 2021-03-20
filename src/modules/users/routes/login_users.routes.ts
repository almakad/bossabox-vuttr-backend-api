import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import LoginUsersController from '../controllers/LoginSessionController';

const sessionRoutes = Router();
const loginController = new LoginUsersController();

sessionRoutes.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  loginController.session,
);
export default sessionRoutes;
