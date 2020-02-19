import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    private id: number;

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

    @CreateDateColumn()
    private created_at:string;
}
