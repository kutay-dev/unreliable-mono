import { LoggingInterceptor } from '@app/core/interceptors/logging.interceptor';
import { LoggerService } from '@app/core/logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = await app.resolve(LoggerService);
  app.useGlobalInterceptors(new LoggingInterceptor(logger));
  const PORT = Number(configService.get<string>('PORT'));
  await app.listen(PORT, '0.0.0.0');
  logger.log(`Server is running on PORT: ${PORT}`);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
