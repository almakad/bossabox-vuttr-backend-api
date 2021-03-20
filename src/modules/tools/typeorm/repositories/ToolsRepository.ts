import { EntityRepository, Repository } from 'typeorm';
import Tool from '../entities/Tool';

@EntityRepository(Tool)
class UsersRepository extends Repository<Tool> {
  async findByTag(tag: string): Promise<Tool | undefined> {
    const tool = await this.findOne({ where: { tags: tag } });
    return tool;
  }
  async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.findOne({ where: { id: id } });
    return tool;
  }
  async findAll(): Promise<Tool[] | undefined> {
    const tool = await this.find();
    return tool;
  }
}

export default UsersRepository;
