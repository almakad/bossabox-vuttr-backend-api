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
    const toolTag = JSON.parse(tool.tags);
    await toolRepository.save(tool);

    return {
      id: tool.id,
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: toolTag,
      created_at: tool.created_at,
      updated_at: tool.updated_at,
    };
  }
}

export default CreateToolsServices;
