import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  findAll(): Promise<Todo[]> {
    return this.todoServiceService.findAllTodos();
  }

  // GET :id
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoServiceService.findOneTodo(id);
  }

  // POST
  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoServiceService.saveTodo(todo);
  }

  // UPDATE
  @Patch()
  update(@Body() todo: Todo): Promise<Todo> {
    if (!todo.id) return; // error 404
    // if (!todoServiceService.exists(todo.id)) return; // error 404
    return this.todoServiceService.saveTodo(todo);
  }

  // DELETE
  @Delete(':id')
  delete(@Param('id') id: string) {
    this.todoServiceService.deleteTodo(id);
  }
}
