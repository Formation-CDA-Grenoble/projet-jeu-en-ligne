import { Controller, Get, Res, HttpCode, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    @HttpCode(201)
    async addUser(@Res() res, @Body() entityUser: User) {
        const user = await this.usersService.addUser(entityUser);
        return res.json({
            message: "User has been created successfully",
            user
        })
    }

    @Get()
    async getAllUsers(@Res() res) {
        const users = await this.usersService.getAllUsers();
        return res.json(users);
    }

    @Get(':ID')
    async getUser(@Res() res, @Param('ID') userID) {
        const user = await this.usersService.getUser(userID);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.json(user);
    }

    @Put('/block/:ID')
    async blockUser(@Res() res, @Param('ID') userID, @Body() entityUser: User) {

        const userBlocked = await this.usersService.getUser(userID);
        if (!userBlocked) throw new NotFoundException('UserBlocked does not exist!');

        const userBlocker = await this.usersService.blockUser(entityUser, userBlocked);
        if (!userBlocker) throw new NotFoundException('User does not exist!');

        return res.json({
            message: 'User has been successfully blocked',
            userBlocker
        });
    }

    @Put()
    async updateUser(@Res() res, @Body() entityUser: User) {
        const user = await this.usersService.updateUser(entityUser);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.json({
            message: 'User has been successfully updated',
            user
        });
    }

    @Delete(':ID')
    async deleteUser(@Res() res, @Param('ID') userID) {
        const user = await this.usersService.deleteUser(userID);
        if (!user) throw new NotFoundException('User does not exist!');
        return res.json({
            message: 'User has been deleted',
            user
        })
    }
}
