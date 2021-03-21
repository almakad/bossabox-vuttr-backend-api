import { Request, Response } from 'express';
import FindByTagToolsService from '../service/FindByTagToolsService';

class FindByTagToolsController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { tag } = req.params;
    const toolsService = new FindByTagToolsService();

    const tool = await toolsService.execute(tag);

    return res.status(200).json(tool);
  }
}
export default FindByTagToolsController;
