import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule, RedisModule } from '@app/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule,
    RedisModule,
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
