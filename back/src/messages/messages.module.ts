
import { Module } from '@nestjs/common';
import { TypeOrmModule } from 'typeorm';
import { UsersService } from './messages.service';
import { UsersController } from './messages.controller';
import { Message } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UsersModule { }