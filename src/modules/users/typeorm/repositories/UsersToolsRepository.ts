import { EntityRepository, Repository } from 'typeorm';
import UserTool from '../entities/User_Tool';

@EntityRepository(UserTool)
class UsersToolsRepository extends Repository<UserTool> {
  async findById(id: string): Promise<UserTool | undefined> {
    const user = await this.findOne({ where: { user_id: id } });
    return user;
  }
}

export default UsersToolsRepository;
