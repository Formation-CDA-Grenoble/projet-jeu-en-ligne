import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';
import { Blocks } from './block.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessagesService],
  controllers: [MessagesController],
})

export class MessagesModule { }
