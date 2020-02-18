import { Controller } from '@nestjs/common';
import { User } from '../users/user.entity';
import { Block } from './block.entity';

@Controller('blocks')
export class BlocksController {}
