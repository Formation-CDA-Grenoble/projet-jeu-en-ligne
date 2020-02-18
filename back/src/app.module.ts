import { Module } from '@nestjs/common';
import { TypeOrmModule } from 'typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  	imports: [
  		TypeOrmModule.forRoot(),
	  	UsersModule,
	   	MessagesModule,
	],

})
export class AppModule {}
