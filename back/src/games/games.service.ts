import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private readonly gamesRepository: Repository<Game>,
    ) {}

    async getAllGames(): Promise<Game[]> {
    	const games = await this.gamesRepository.find({ relations: ["player1", "player2"] });
    	return games;
    }

    async getGame(gameID:number): Promise<Game> {
    	const game = await this.gamesRepository.findOne(gameID, { relations: ["player1", "player2"] });
        return game;
    }

    async addGame(entityGame: Game): Promise<Game> {
    	const game = await this.gamesRepository.save(entityGame);
        return game;   
    }

    async updateGame(entityGame: Game): Promise<Game> {
    	const game = await this.gamesRepository.save(entityGame);
    	return game;
    }

    async deleteGame(gameID): Promise<any> {
        let gameToDeleted = await this.gamesRepository.findOne(gameID);
        const deletedGame = await this.gamesRepository.remove(gameToDeleted);
        return deletedGame;
    }
}
