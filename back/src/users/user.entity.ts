import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { Block } from '../blocks/block.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column('varchar', { length: 255 })
    private pseudo: string;

    @Column('varchar', {length: 255})
    private email: string;

    @Column('varchar', {length: 255})
    private password: string;

    @Column('int')
    private score: number;

    @Column('boolean')
    private status: boolean;

    @OneToMany(type => Block, block => block.user_blocked)
    public usersBlocked: User[];

    @OneToMany(type => Block, block => block.user_blocker)
    public usersBlocker: User[];

    @CreateDateColumn()
    private created_at:string;

    public getId = ():number => {
        return this.id
    }

    public setId = (id:number):void => {
        this.id = id
    }

    public getPseudo = ():string => {
        return this.pseudo
    }

    public setPseudo = (pseudo:string):void => {
        this.pseudo = pseudo
    }

    public getEmail = ():string => {
        return this.email
    }

    public setEmail = (email:string):void => {
        this.email = email
    }

    public getPassword = ():string => {
        return this.password
    }

    public setPassword = (password:string):void => {
        this.password = password
    }

    public getScore = ():number => {
        return this.score
    }

    public setScore = (score:number):void => {
        this.score = score
    }

    public getStatus = ():boolean => {
        return this.status
    }

    public setStatus = (status:boolean):void => {
        this.status = status
    }
}