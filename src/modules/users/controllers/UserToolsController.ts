import { Request, Response } from 'express';
import UserToolsService from '../services/UserToolsService';

class UsersToolsController {
  async delete(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.body;
    const { tools_id } = req.params;
    const userToolsService = new UserToolsService();

    await userToolsService.delete({ user_id, tools_id });
    return res.status(201).json({ message: 'Tool deleted ' });
  }
}

export default UsersToolsController;
