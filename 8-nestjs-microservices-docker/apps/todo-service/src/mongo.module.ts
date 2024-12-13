import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://boris:WH12U5XkDINCq71V@cluster0.8ovqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      database: 'todos',
      logging: true,
      entities: [Todo],
    }),
  ],
  exports: [TypeOrmModule],
})
export class MongoModule {}
