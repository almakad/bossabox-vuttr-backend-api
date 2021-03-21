import { Request, Response } from 'express';
import CreateUsersService from '../services/CreateUsersService';

class CreateUsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const userService = new CreateUsersService();

    const user = await userService.execute({ name, email, password });
    return res.status(201).json(user);
  }
}

export default CreateUsersController;
