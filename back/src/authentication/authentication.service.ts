import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT_EXPIRATION_TIME } from '../../constants';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import UsersTransformer from '../users/users.transformer'
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../constants';

@Injectable()
export class AuthenticationService {

	constructor(
			private readonly usersService: UsersService,
		) {}

	async generateToken(user: User) {
		const { password, ...result } = user 
	    return {
	      	expiresIn: JWT_EXPIRATION_TIME,
	      	accessToken: jwt.sign({ ...result }, JWT_SECRET)
	    };
  	}

  	async validateUser(email:string, plaintextPassword:string): Promise<any> {
  		const password = await UsersTransformer.hashPassword(plaintextPassword);
	    const user = await this.usersService.getUserByEmailAndPassword(email, password);
	    if (!user) {
	      throw new UnauthorizedException('Wrong email or password !');
	    }
	    return user;
 	}
}
