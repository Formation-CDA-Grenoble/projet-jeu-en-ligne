import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../constants';
import { UsersService } from '../users/users.service';


@Injectable()
export class DecodeJwtMiddleware implements NestMiddleware {

	constructor(private readonly usersService: UsersService) {}

	async use(req :any, res: Response, next: () => void) {
		const authHeaders = req.headers.authorization;
    	if (authHeaders && typeof authHeaders === "string") {
		    const token = authHeaders;
		    const decoded: any = jwt.verify(token, JWT_SECRET);
		    const user = await this.usersService.getUser(decoded.id);
			if (!user) {
        		throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
      		}
      		req["user"] = user;
      		next();
    	} else {
      		throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    	}
  	}
}