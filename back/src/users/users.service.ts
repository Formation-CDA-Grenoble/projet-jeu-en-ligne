import { Injectable, Inject, NotAcceptableException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    async getAllUsers(): Promise<User[]> {
    	const users = await this.usersRepository.find({ relations: ["usersBlocked"] });
    	return users
    }

    async getUser(userID:number): Promise<User> {
    	const user = await this.usersRepository.findOne(userID, { relations: ["usersBlocked"] });
        return user;
    }

    async getUserByEmail(email:string): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { email: email }});
        return user;
    }

    async getUserByEmailAndPassword(email:string, password:string): Promise<User> {
        const user = await this.usersRepository.findOne({ where: { email: email, password: password }});
        return user;
    }

    async blockUser(userBlocker: User, userBlocked:User): Promise<User> {
        userBlocker.usersBlocked = [ userBlocked ]
        const blockUser = await this.usersRepository.save(userBlocker);
        return blockUser; 
    }

    async addUser(entityUser: User): Promise<User> {  
        const checkUserExistence = await this.getUserByEmail(entityUser.email);

        if (checkUserExistence) {
            throw new NotAcceptableException(
                'Another user with provided email already exists.',
            );
        }
        const user = new User()
        user.email = entityUser.email
        user.pseudo = entityUser.pseudo
        user.status = entityUser.status
        user.password = entityUser.password
        const newUser = await this.usersRepository.save(user); 
        return newUser;
    }

    async updateUser(entityUser: User): Promise<User> {
    	const user = await this.usersRepository.save(entityUser);
        return user;
    }

    async deleteUser(userID): Promise<any> {
        let userToDeleted = await this.usersRepository.findOne(userID);
        const deletedUser = await this.usersRepository.remove(userToDeleted);
        return deletedUser;
    }
}
