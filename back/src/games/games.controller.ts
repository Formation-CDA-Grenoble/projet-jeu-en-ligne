import { GamesService } from './games.service';
import { Game } from './game.entity';
import { Controller, Get, Res, HttpCode, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';

@Controller('games')
export class GamesController {

    constructor(private gamesService: GamesService) {}

    @Post()
    @HttpCode(201)
    async addGame(@Res() res, @Body() entityGame: Game) {
        const game = await this.gamesService.addGame(entityGame);
        return res.json({
            message: "Game has been created successfully",
            game
        })
    }

    @Get()
    async getAllGames(@Res() res) {
        const games = await this.gamesService.getAllGames();
        return res.json(games);
    }

    @Get(':ID')
    async getGame(@Res() res, @Param('ID') gameID) {
        const game = await this.gamesService.getGame(gameID);
        if (!game) throw new NotFoundException('Game does not exist!');
        return res.json(game);
    }

    @Put()
    async updateGame(@Res() res, @Body() entityGame: Game) {
        const game = await this.gamesService.updateGame(entityGame);
        if (!game) throw new NotFoundException('Game does not exist!');
        return res.json({
            message: 'Game has been successfully updated',
            game
        });
    }

    @Delete(':ID')
    async deleteGame(@Res() res, @Param('ID') gameID) {
        const game = await this.gamesService.deleteGame(gameID);
        if (!game) throw new NotFoundException('Game does not exist!');
        return res.json({
            message: 'Game has been deleted',
            game
        })
    }
}

