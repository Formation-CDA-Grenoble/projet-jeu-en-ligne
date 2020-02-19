import { MovesService } from './moves.service';
import { Move } from './move.entity';
import { Controller, Get, Res, HttpCode, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
@Controller('moves')
export class MovesController {
    constructor(private movesService: MovesService) {}

    @Post()
    @HttpCode(201)
    async addMove(@Res() res, @Body() entityMove: Move) {
        const move = await this.movesService.addMove(entityMove);
        return res.json({
            message: "Game has been created successfully",
            move
        })
    }

    @Get()
    async getAllMoves(@Res() res) {
        const moves = await this.movesService.getAllMoves();
        return res.json(moves);
    }

    @Get('/game/:ID')
    async getAllMovesByGame(@Res() res, @Param('ID') gameID) {
        const moves = await this.movesService.getAllMovesByGame(gameID);
        return res.json(moves);
    }

    @Get('/user/:ID')
    async getAllMovesByUser(@Res() res, @Param('ID') userID) {
        const moves = await this.movesService.getAllMovesByUser(userID);
        return res.json(moves);
    }

    @Get('/gameuser/:gameID/:userID')
    async getAllMovesByGameByUser(@Res() res, @Param('gameID') gameID, @Param('userID') userID) {
        const moves = await this.movesService.getAllMovesByGameByUser(gameID, userID);
        return res.json(moves);
    }

    @Get('/:ID')
    async getMove(@Res() res, @Param('ID') moveID) {
        const move = await this.movesService.getMove(moveID);
        if (!move) throw new NotFoundException('Move does not exist!');
        return res.json(move);
    }

    @Put()
    async updateMove(@Res() res, @Body() entityMove: Move) {
        const move = await this.movesService.updateMove(entityMove);
        if (!move) throw new NotFoundException('Move does not exist!');
        return res.json({
            message: 'Move has been successfully updated',
            move
        });
    }

    @Delete(':ID')
    async deleteMove(@Res() res, @Param('ID') moveID) {
        const move = await this.movesService.deleteMove(moveID);
        if (!move) throw new NotFoundException('Move does not exist!');
        return res.json({
            message: 'Move has been deleted',
            move
        })
    }
}


