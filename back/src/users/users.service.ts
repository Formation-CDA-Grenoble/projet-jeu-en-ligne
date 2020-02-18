import { Injectable, Inject } from '@nestjs/common';
import { Repository, InjectRepository  } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async getAllUsers(): Promise<User[]> {
    	const users = await this.usersRepository.find();
    	return users;
    }

    async getUser(userID): Promise<User> {
    	const user = await this.usersRepository.findOne(userID);
        return user;
    }

    async addUser(entityUser: User): Promise<User> {
    	const user = await this.usersRepository.save(entityUser);
        return user;
        
    }

    async updateUser(userID, entityUser: User): Promise<User> {
    	const user = await this.usersRepository.save(entityUser);
    	return user;
    }

    async deleteUser(userID): Promise<any> {
        let userToDeleted = await this.usersRepository.findOne(userID);
        const deletedUser = await this.usersRepository.delete(userToDeleted);
        return deletedUser;
    }
}
