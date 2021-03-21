import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppErrors';
import Tool from '../typeorm/entities/Tool';
import ToolsRepository from '../typeorm/repositories/ToolsRepository';

class FindByTagToolsService {
  async execute(tag: string): Promise<Tool[]> {
    const toolRepository = getCustomRepository(ToolsRepository);

    const tools = await toolRepository.findByTag(tag);

    if (!tools) throw new AppError('Tool not found');

    const tool = tools.map(tools => {
      return {
        id: tools.id,
        title: tools.title,
        link: tools.link,
        description: tools.description,
        tags: JSON.parse(tools.tags),
        created_at: tools.created_at,
        updated_at: tools.updated_at,
      };
    });
    return tool;
  }
}

export default FindByTagToolsService;
