import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppGateway } from './app.gateway';

@Module({
  imports: [HttpModule],
  controllers: [AppGateway],
})
export class GatewayModule {}
