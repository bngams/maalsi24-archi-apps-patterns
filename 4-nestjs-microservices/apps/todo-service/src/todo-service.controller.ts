import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
  findOne(@Param('id') id: string) {

  } 

  // POST
  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoServiceService.insertTodo(todo);
  } 

  // UPDATE
  @Patch()
  update(@Body() todo: Todo) {

  } 

  // DELETE
  @Delete(':id')
  delete(@Param('id') id: string) {

  } 
}
