import { getCustomRepository } from 'typeorm';
import Tool from '../typeorm/entities/Tool';
import ToolsRepository from '../typeorm/repositories/ToolsRepository';

class FindAllToolsService {
  async search(): Promise<Tool[] | undefined> {
    const toolRepository = getCustomRepository(ToolsRepository);

    const tools = await toolRepository.findAll();
    return tools;
  }
}

export default FindAllToolsService;
