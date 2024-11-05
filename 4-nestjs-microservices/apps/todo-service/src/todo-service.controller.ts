import { Controller, Get } from '@nestjs/common';
import { TodoServiceService } from './todo-service.service';
import { Todo } from './entities/todo.entity';

@Controller()
export class TodoServiceController {
  constructor(private readonly todoServiceService: TodoServiceService) {}

  @Get('/welcome')
  getHello(): string {
    return this.todoServiceService.getHello();
  }

  @Get()
  getTodos(): Promise<Todo[]>  {
    return this.todoServiceService.findAllTodos();
  }
}
