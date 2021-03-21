import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppErrors';
import Tool from '../typeorm/entities/Tool';
import ToolsRepository from '../typeorm/repositories/ToolsRepository';

class FindByTagToolsService {
  async execute(tag: string): Promise<Tool> {
    const toolRepository = getCustomRepository(ToolsRepository);

    const tools = await toolRepository.findByTag(tag);

    if (!tools) throw new AppError('Tool not found');

    return tools;
  }
}

export default FindByTagToolsService;
