import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BlocksModule } from './blocks/blocks.module';
import { GamesModule } from './games/games.module';
import { MovesModule } from './moves/moves.module';
import { MessagesModule } from './messages/messages.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  	imports: [
  		TypeOrmModule.forRoot(),
	  	UsersModule,
	   	MessagesModule,
	   	BlocksModule,
	   	GamesModule,
	   	MovesModule,
	   	AuthenticationModule,
	],

})
export class AppModule {}
