import { Router } from 'express';
import UsersController from '../controllers/CreateUsersController';
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/signup',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  usersController.create,
);

export default usersRouter;
