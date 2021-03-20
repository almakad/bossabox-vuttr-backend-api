import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import AppError from '../../../shared/errors/AppErrors';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { sign } from 'jsonwebtoken';
import auth from '../../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class LoginSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) throw new AppError('User or password not found.');

    const passwordCompare = await compare(password, user.password);
    if (!passwordCompare) throw new AppError('User or password not found.');

    const secret = auth.jwt.secret;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: '12h',
    });
    return {
      user,
      token,
    };
  }
}

export default LoginSessionService;
