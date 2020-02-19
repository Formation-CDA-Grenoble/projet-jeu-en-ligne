import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { BlocksModule } from './blocks/blocks.module';
import { GamesModule } from './games/games.module';
import { MovesModule } from './moves/moves.module';

@Module({
  	imports: [
  		TypeOrmModule.forRoot(),
	  	UsersModule,
	   	MessagesModule,
	   	BlocksModule,
	   	GamesModule,
	   	MovesModule,
	],

})
export class AppModule {}
