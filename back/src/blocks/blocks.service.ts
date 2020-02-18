import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Block } from './block.entity';

@Injectable()
export class BlocksService {
    constructor(
        @InjectRepository(Block)
        private readonly blocksRepository: Repository<Block>,
    ) {}

    async getAllUsersBlocked(userID:number): Promise<Block[]> {
    	const blocks = await this.blocksRepository.find({ where: { user_blocker : userID }});
    	return blocks;
    }

    async getAllUsersBlocker(userID:number): Promise<Block[]> {
    	const blocks = await this.blocksRepository.find({ where: { user_blocked: userID }});
    	return blocks;
    }
}
