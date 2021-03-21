import { Request, Response } from 'express';
import FindByTagToolsService from '../service/FindByTagToolsService';

class FindByTagToolsController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { tag } = req.params;
    const toolsService = new FindByTagToolsService();

    const tool = await toolsService.execute(tag);
    const tools = tool.map(tools => {
      return {
        title: tools.title,
        link: tools.link,
        description: tools.description,
        tags: tools.tags,
        id: tools.id,
      };
    });
    return res.status(200).json(tools);
  }
}
export default FindByTagToolsController;
