import { Router } from 'express';
import isAuthenticated from '../../../shared/http/middleware/isAuthenticated';
import FindAllToolsController from '../controllers/FindAllToolsController';
import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();

const toolsController = new ToolsController();
const findAllController = new FindAllToolsController();

toolsRouter.use(isAuthenticated);

toolsRouter.post('/', toolsController.create);

toolsRouter.get('/', findAllController.search);

export default toolsRouter;
