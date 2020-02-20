import * as password from 'password-hash-and-salt';
import { SALT } from '../../constants'
import * as crypto from 'crypto';

export default class UserTransformer {
	static hashPassword = (plaintextPassword:string) => {
		return crypto.pbkdf2Sync(plaintextPassword, SALT, 10000, 270, "Whirlpool").toString('hex')
	}
}