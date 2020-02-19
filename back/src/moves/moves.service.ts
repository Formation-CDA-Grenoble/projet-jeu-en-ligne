import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Move } from './move.entity';

@Injectable()
export class MovesService {
    constructor(
        @InjectRepository(Move)
        private readonly movesRepository: Repository<Move>,
    ) {}

    async getAllmoves(): Promise<Move[]> {
    	const moves = await this.movesRepository.find();
    	return moves;
    }

    async getAllMovesByGame(gameID:number): Promise<Move[]> {
    	const moves = await this.movesRepository.find({ where: { game: gameID }});
        return moves;
    }

    async getAllMovesByUser(userID:number): Promise<Move[]> {
    	const moves = await this.movesRepository.find({ where: { user: userID }});
        return moves;
    }

    async getAllMovesByUserByGame(gameID:number, userID:number): Promise<Move[]> {
    	const moves = await this.movesRepository.find({ where: { game: gameID, player: userID }});
        return moves;
    }

    async addMove(entityMove: Move): Promise<Move> {
    	const move = await this.movesRepository.save(entityMove);
        return move;   
    }

    async updateMove(entityMove: Move): Promise<Move> {
    	const move = await this.movesRepository.save(entityMove);
    	return move;
    }

    async deleteMove(moveID): Promise<any> {
        let moveToDeleted = await this.movesRepository.findOne(moveID);
        const deletedMove = await this.movesRepository.remove(moveToDeleted);
        return deletedMove;
    }
}
