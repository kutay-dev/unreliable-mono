import { Injectable } from '@nestjs/common';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class RedisService {
  constructor(private readonly logger: LoggerService) {
    this.logger.setModuleName(RedisService.name);
  }

  getClient() {
    this.logger.log('redis client');
    return 'redis client';
  }
}
