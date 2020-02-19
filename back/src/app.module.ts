import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { BlocksModule } from './blocks/blocks.module';
import { GamesModule } from './games/games.module';

@Module({
  	imports: [
  		TypeOrmModule.forRoot(),
	  	UsersModule,
	   	MessagesModule,
	   	BlocksModule,
	   	GamesModule,
	],

})
export class AppModule {}
