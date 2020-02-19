import { MessagesService } from './messages.service';
import { Message } from './message.entity';
import { Controller, Get, Res, HttpCode, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Post()
    @HttpCode(201)
    async addMessage(@Res() res, @Body() entityMessage: Message) {
        const messages = await this.messagesService.addMessage(entityMessage);
        return res.json({
            message: "Game has been created successfully",
            messages
        })
    }

    @Get()
    async getAllMessages(@Res() res) {
        const messages = await this.messagesService.getAllMessages();
        return res.json(messages);
    }

    @Get('/game/:ID')
    async getAllMessagesByGame(@Res() res, @Param('ID') gameID) {
        const messages = await this.messagesService.getAllMessagesByGame(gameID);
        return res.json(messages);
    }

    @Get('/sender/:ID')
    async getAllMessagesBySender(@Res() res, @Param('ID') senderID) {
        const messages = await this.messagesService.getAllMessagesBySender(senderID);
        return res.json(messages);
    }

    @Get('/recever/:ID')
    async getAllMessagesByRecever(@Res() res, @Param('ID') receverID) {
        const messages = await this.messagesService.getAllMessagesByRecever(receverID);
        return res.json(messages);
    }

    @Get('/receversender/:receverID/:receverID')
    async getAllMessagesByReceverAndSender(@Res() res, @Param('ID') receverID, @Param('ID') senderID) {
        const messages = await this.messagesService.getAllMessagesByReceverAndSender(receverID, senderID);
        return res.json(messages);
    }

    @Get(':ID')
    async getMessage(@Res() res, @Param('ID') messageID) {
        const message = await this.messagesService.getMessage(messageID);
        if (!message) throw new NotFoundException('Message does not exist!');
        return res.json(message);
    }

    @Put()
    async updateMessage(@Res() res, @Body() entityMessage: Message) {
        const messages = await this.messagesService.updateMessage(entityMessage);
        if (!messages) throw new NotFoundException('Message does not exist!');
        return res.json({
            message: 'Game has been successfully updated',
            messages
        });
    }

    @Delete(':ID')
    async deleteMessage(@Res() res, @Param('ID') messageID) {
        const messages = await this.messagesService.deleteMessage(messageID);
        if (!messages) throw new NotFoundException('Message does not exist!');
        return res.json({
            message: 'Game has been deleted',
            messages
        })
    }
}

