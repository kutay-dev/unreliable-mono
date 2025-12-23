import { LoggerModule, RedisModule } from '@app/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule,
    RedisModule,
  ],
  controllers: [AppGateway],
})
export class AppModule {}
