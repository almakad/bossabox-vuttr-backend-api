import { Router } from 'express';
import isAuthenticated from '../../../shared/http/middleware/isAuthenticated';
import FindAllToolsController from '../controllers/FindAllToolsController';
import FindByTagToolsController from '../controllers/FindByTagToolsController';
import ToolsController from '../controllers/CreateToolsController';

const toolsRouter = Router();

const toolsController = new ToolsController();
const findAllController = new FindAllToolsController();
const findByTaglController = new FindByTagToolsController();

toolsRouter.use(isAuthenticated);

toolsRouter.post('/', toolsController.create);

toolsRouter.get('/', findAllController.search);
toolsRouter.get('/:tag', findByTaglController.execute);

export default toolsRouter;
