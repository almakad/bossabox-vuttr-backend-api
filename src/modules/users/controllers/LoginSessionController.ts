import { Request, Response } from 'express';
import LoginUsersService from '../services/LoginUsersService';

class LoginUsersController {
  async session(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const loginUserService = new LoginUsersService();

    const user = await loginUserService.execute({ email, password });
    return res.status(200).json(user);
  }
}

export default LoginUsersController;
