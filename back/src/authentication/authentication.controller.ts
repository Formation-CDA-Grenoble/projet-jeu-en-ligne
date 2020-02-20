import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import * as password from 'password-hash-and-salt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../constants'

@Controller('login')
export class AuthenticationController {

	constructor(private readonly usersService: UsersService) {}

	@Post()
	async login(@Body("email") email:string, @Body("password") plaintextPassword:string) {
		const user = await this.usersService.getUserByEmailAndPassword(email, plaintextPassword)

		if(!user) {
			throw new UnauthorizedException();
		}

		return new Promise((resolve, reject) => {
			console.log("return", plaintextPassword, user.password)
			password(plaintextPassword).verifyAgainst(
				user.password,
				(err, verified) => {
					console.log("ca passe err, verified", verified, err)
					if(!verified) {
						reject(new UnauthorizedException())
					}

					const authJwtToken = jwt.sign({ email, pseudo: user.pseudo },
						JWT_SECRET);

					resolve({ authJwtToken })
				}
			)
		})
	}
}
