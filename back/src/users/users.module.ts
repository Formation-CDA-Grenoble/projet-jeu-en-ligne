import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from 'typeorm';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
})

export class UsersModule {}
