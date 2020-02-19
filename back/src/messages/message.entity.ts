import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Game } from '../games/game.entity';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar', { 
    	length: 255,
    	nullable: false
    })
    private text: string;

    @Column('boolean', {
    	nullable: false
    })
    private whisp: boolean;

	@ManyToOne(type => User, {
		nullable: true
	}) 
	private sender: User;

	@ManyToOne(type => User, {
		nullable: true
	}) 
	private recever: User; 

	@ManyToOne(type => Game, game => game.messages, {
		nullable: true
	}) 
	public game: Game;

    @CreateDateColumn()
    private created_at:string;
}
