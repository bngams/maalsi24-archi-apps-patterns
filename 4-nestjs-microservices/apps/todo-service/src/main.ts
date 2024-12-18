import { NestFactory } from '@nestjs/core';
import { TodoServiceModule } from './todo-service.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(TodoServiceModule);
  await app.listen(3001); // TODO: Use env var
}
bootstrap();
