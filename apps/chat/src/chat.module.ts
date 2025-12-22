import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { RedisModule } from '@app/core';

@Module({
  imports: [RedisModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
