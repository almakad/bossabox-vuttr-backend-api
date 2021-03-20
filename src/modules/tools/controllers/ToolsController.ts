import { Request, Response } from 'express';
import CreateToolsServices from '../service/CreateToolsServices';

class ToolsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { title, link, description, tags } = req.body;

    const toolsService = new CreateToolsServices();

    const tools = await toolsService.create({ title, link, description, tags });

    return res.status(201).json(tools);
  }
}

export default ToolsController;
