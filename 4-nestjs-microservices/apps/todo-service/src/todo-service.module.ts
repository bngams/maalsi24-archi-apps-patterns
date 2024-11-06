import { Module } from '@nestjs/common';
import { TodoServiceController } from './todo-service.controller';
import { TodoServiceService } from './todo-service.service';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongoModule,
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [TodoServiceController],
  providers: [TodoServiceService],
})
export class TodoServiceModule {}
