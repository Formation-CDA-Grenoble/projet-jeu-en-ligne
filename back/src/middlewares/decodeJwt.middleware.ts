import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../constants';

@Injectable()
export class DecodeJwtMiddleware implements NestMiddleware {

	use(req :Request, res: Response, next: () => void) {
		console.log(req.headers)
		const authJwtToken = req.headers;

		if(!authJwtToken) {
			next();
			return;
		}

		try{
			const user = jwt.verify(authJwtToken, JWT_SECRET)

			if(user) {
				console.log("Found user details in JWT: ", user);
				req["user"] = user;
			}
		} catch(err){
			console.log("Error handleing authentication JWT: ", err)
		}
		next()
	}
}