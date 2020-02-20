import { Injectable } from '@nestjs/common';
import { JWT_EXPIRATION_TIME } from '../../constants'

@Injectable()
export class AuthenticationService {


	async generateToken(user: User) {
		const { password, ...result } = user
	    return {
	      	expiresIn: this.configService.get(JWT_EXPIRATION_TIME),
	      	accessToken: this.jwtService.sign({ ...result }),
	    };
  	}

  	async validateUser({ email, password }: LoginPayload): Promise<any> {
	    const user = await this.userService.getByEmailAndPass(email, password);
	    if (!user) {
	      throw new UnauthorizedException('Wrong email or password !');
	    }
	    const { password, ...result } = user
    	return result;
 	}
}
