import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Move } from '../moves/move.entity';
import { Message } from '../messages/message.entity';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar', { 
    	length: 255,
    	nullable: false
    })
    private name: string;

    @Column('varchar', {
    	length: 255,
    	nullable: true
    })
    private password: string;

    @Column('int', {
    	nullable: false,
    	default: 1
    })
    private status: number;

	@ManyToOne(type => User, {
		nullable: false,
		onDelete: "RESTRICT"
	}) 
	private player1: User;

	@ManyToOne(type => User) 
	private player2: User; 

	@OneToMany(type => Move, move => move.game) 
	public moves: Move[];

	@OneToMany(type => Message, message => message.game) 
	public messages: Message[];

    @CreateDateColumn()
    private created_at:string;
}
