import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { Game } from '../games/game.entity';
import { User } from '../users/user.entity';

@Entity()
export class Move {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('int', { 
    	nullable: false
    })
    private ordered: number;

    @Column('int', {
    	nullable: false
    })
    private position: number;

	@ManyToOne(() => Game, game => game.moves, {
		nullable: false,
		onDelete: "CASCADE",
		onUpdate: "CASCADE"
	})
	public game: Game;

	@ManyToOne(() => User, {
		nullable: true,
		onDelete: "SET NULL"
	})
	public player: User; 

    @CreateDateColumn()
    private created_at:string;
}
