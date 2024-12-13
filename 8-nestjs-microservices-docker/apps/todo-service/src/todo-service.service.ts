import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoServiceService {
  // We use constructor with dependency injection pattern
  // to ask nest to create a Todo Repository for us with typeORM
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  getHello(): string {
    return 'Hello World from todo-service!';
  }

  async findAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOneTodo(id: string): Promise<Todo> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async saveTodo(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
