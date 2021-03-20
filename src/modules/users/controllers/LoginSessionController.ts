import { Request, Response } from 'express';
import LoginSessionService from '../services/LoginSessionService';

class LoginSessionController {
  async session(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const loginUserService = new LoginSessionService();

    const user = await loginUserService.execute({ email, password });
    return res.status(200).json(user);
  }
}

export default LoginSessionController;
