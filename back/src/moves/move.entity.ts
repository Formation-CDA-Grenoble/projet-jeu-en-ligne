import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Game } from '../games/game.entity';
import { User } from '../users/user.entity';

@Entity()
export class Move {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column('int', { 
    	nullable: false
    })
    private ordered: number;

    @Column('int', {
    	nullable: false
    })
    private position: number;

	@ManyToOne(type => Game, {
		nullable: false,
		onDelete: "CASCADE"
	}) 
	private game: Game;

	@ManyToOne(type => User, {
		nullable: true,
		onDelete: "SET NULL"
	}) 
	private player: User; 

    @CreateDateColumn()
    private created_at:string;
}
