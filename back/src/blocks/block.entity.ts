import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity'

@Entity()
export class Block {
    @PrimaryGeneratedColumn()
    private id: number;

    @ManyToOne(type => User, user => user.usersBlocked, {
        onDelete: 'CASCADE',
        nullable: false
    })
    public user_blocked:number;

    @ManyToOne(type => User, user => user.usersBlocker, {
        onDelete: 'CASCADE',
        nullable: false
    })
    public user_blocker: number;
}