import { Request, Response } from 'express';
import AppError from '../../../shared/errors/AppErrors';
import FindAllToolsService from '../service/FindAllToolsService';

class FindAllToolsController {
  async search(req: Request, res: Response): Promise<Response> {
    const toolsService = new FindAllToolsService();

    const tools = await toolsService.search();
    if (!tools) throw new AppError('Tools not found');

    const tool = tools.map(e => {
      return {
        id: e.id,
        title: e.title,
        description: e.description,
        tags: JSON.parse(e.tags),
      };
    });
    return res.status(200).json(tool);
  }
}

export default FindAllToolsController;
