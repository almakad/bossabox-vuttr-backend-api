import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/check', (req: Request, res: Response) => {
  return res.status(200).json({
    status: 'First route',
  });
});

export default routes;
