import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthenticationService } from './authentication.service';
import { User } from '../users/user.entity';

@Controller('login')
export class AuthenticationController {

	constructor(
			private readonly usersService: UsersService,
			private readonly authenticationService: AuthenticationService
		) {}

	@Post()
	async login(@Body("email") email:string, @Body("password") plaintextPassword:string) {
		const user = await this.authenticationService.validateUser(email, plaintextPassword)

		if(!user) {
			throw new UnauthorizedException();
		}

		const authJwtToken = this.authenticationService.generateToken(user)

		return authJwtToken;
	}
}
