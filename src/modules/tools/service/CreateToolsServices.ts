import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppErrors';
import Tool from '../typeorm/entities/Tool';
import ToolsRepository from '../typeorm/repositories/ToolsRepository';

interface IRequest {
  title: string;
  link: string;
  description: string;
  tags: string[];
}
class CreateToolsServices {
  async create({ title, link, description, tags }: IRequest): Promise<Tool> {
    const toolRepository = getCustomRepository(ToolsRepository);

    const toolsExist = await toolRepository.findByTitle(title);
    if (toolsExist) throw new AppError('Tool title already exists');
    const tag = JSON.stringify(tags);
    const tool = toolRepository.create({ title, link, description, tags: tag });
    await toolRepository.save(tool);

    return tool;
  }
}

export default CreateToolsServices;
