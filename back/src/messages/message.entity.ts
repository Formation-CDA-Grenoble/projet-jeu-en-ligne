import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ length: 255 })
    private pseudo: string;

    @Column({length: 255})
    private email: string;

    @Column({length: 255})
    private password: string;

    @Column('int')
    private score: number;

    @Column()
    private status: boolean;

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
