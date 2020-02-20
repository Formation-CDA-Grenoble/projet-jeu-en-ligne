import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, BeforeInsert, AfterInsert } from 'typeorm';
import { Block } from '../blocks/block.entity';
import * as password from 'password-hash-and-salt';
import UsersTransformer from './users.transformer'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar', { 
        length: 255,
        unique: true
    })
    public pseudo: string;

    @Column('varchar', {
        length: 255,
        unique: true
    })
    public email: string;

    @Column('varchar', {
        length: 1200,
        select: false
    })
    public password: string;

    @Column('int', {
        default: 0
    })
    public score: number;

    @Column('boolean')
    public status: boolean;

    @OneToMany(type => Block, block => block.user_blocked)
    public usersBlocked: User[];

    @OneToMany(type => Block, block => block.user_blocker)
    public usersBlocker: User[];

    @CreateDateColumn()
    public created_at:string;

    @BeforeInsert()
    hashpassword() { 
        this.password = UsersTransformer.hashPassword(this.password)
    }
}