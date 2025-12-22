import { RedisService } from '@app/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  constructor(private readonly redisService: RedisService) {}

  getChat(): string {
    return 'chat service';
  }

  getRedis(): string {
    return this.redisService.getClient();
  }
}
