import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppErrors';
import ToolsRepository from '../../tools/typeorm/repositories/ToolsRepository';
import UserTool from '../typeorm/entities/User_Tool';
import UsersToolsRepository from '../typeorm/repositories/UsersToolsRepository';

interface IRequest {
  user_id: string;
  tools_id: string;
}

class UserToolsService {
  async delete({ user_id, tools_id }: IRequest): Promise<UserTool | undefined> {
    const usersToolsRepository = getCustomRepository(UsersToolsRepository);
    const toolRepository = getCustomRepository(ToolsRepository);
    const user = await usersToolsRepository.findById(user_id);
    if (!user) throw new AppError('User doesnt have any tool');

    const toolUser = await usersToolsRepository.findOne({
      where: { tools_id: tools_id },
    });
    if (!toolUser) throw new AppError('Tool_id not found');

    await usersToolsRepository.remove(user);

    const tools = await toolRepository.findById(tools_id);
    if (!tools) throw new AppError('');

    await toolRepository.remove(tools);
    return user;
  }
}
export default UserToolsService;
