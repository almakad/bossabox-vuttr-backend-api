import { EntityRepository, Like, Repository } from 'typeorm';
import Tool from '../entities/Tool';

@EntityRepository(Tool)
class ToolsRepository extends Repository<Tool> {
  async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.findOne({ where: { id: id } });
    return tool;
  }
  async findByTag(tag: string): Promise<Tool[] | undefined> {
    const tool = await this.find({ tags: Like(`%${tag}%`) });
    return tool;
  }
  async findByTitle(title: string): Promise<Tool | undefined> {
    const tool = await this.findOne({ where: { title: title } });
    return tool;
  }
  async findAll(): Promise<Tool[] | undefined> {
    const tool = await this.find();
    return tool;
  }
}

export default ToolsRepository;
