import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { LoggingInterceptor } from '@app/core';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
