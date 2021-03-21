import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersToolsController from '../controllers/UserToolsController';

const deleteRouter = Router();
const deleteController = new UsersToolsController();

deleteRouter.post(
  '/:tools_id',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  deleteController.delete,
);
export default deleteRouter;
