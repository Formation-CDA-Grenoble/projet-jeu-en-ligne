import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { UsersModule } from '../users/users.module'
import { AuthenticationService } from './authentication.service';


@Module({
	imports: [UsersModule],
  	controllers: [AuthenticationController],
  	providers: [AuthenticationService]
})
export class AuthenticationModule {}
