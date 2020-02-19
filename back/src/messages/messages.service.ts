import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly messagesRepository: Repository<Message>,
    ) {}

    async getAllMessages(): Promise<Message[]> {
    	const messages = await this.messagesRepository.find({ relations: ["sender", "recever", "game"] });
    	return messages;
    }

    async getAllMessagesByGame(gameID): Promise<Message[]> {
    	const messages = await this.messagesRepository.find({ where: { game: gameID }, relations: ["sender", "recever"] });
    	return messages;
    }

    async getAllMessagesBySender(senderID): Promise<Message[]> {
    	const messages = await this.messagesRepository.find({ where: { sender: senderID }, relations: ["recever", "game"] });
    	return messages;
    }

    async getAllMessagesByRecever(receverID): Promise<Message[]> {
    	const messages = await this.messagesRepository.find({ where: { recever: receverID }, relations: ["sender", "game"] });
    	return messages;
    }

    async getAllMessagesByReceverAndSender(receverID, senderID): Promise<Message[]> {
    	const messages = await this.messagesRepository.find({ where: { recever: receverID, sender: senderID }, relations: ["game"] });
    	return messages;
    }

    async getMessage(messageID:number): Promise<Message> {
    	const message = await this.messagesRepository.findOne(messageID, { relations: ["player1", "player2", "game"] });
        return message;
    }

    async addMessage(entityMessage: Message): Promise<Message> {
    	const game = await this.messagesRepository.save(entityMessage);
        return game;   
    }

    async updateMessage(entityMessage: Message): Promise<Message> {
    	const message = await this.messagesRepository.save(entityMessage);
    	return message;
    }

    async deleteMessage(messageID): Promise<any> {
        let messageToDeleted = await this.messagesRepository.findOne(messageID);
        const deletedMessage = await this.messagesRepository.remove(messageToDeleted);
        return deletedMessage;
    }
}

