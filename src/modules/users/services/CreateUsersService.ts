import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';
import AppError from '../../../shared/errors/AppErrors';

interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

class CreateUsersService {
  async execute({ name, email, password }: IUserCreate): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userExists = await usersRepository.findByEmail(email);
    if (userExists) throw new AppError('User alreay exists');

    const hashed = await hash(password, 12);
    const user = usersRepository.create({ name, email, password: hashed });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUsersService;
