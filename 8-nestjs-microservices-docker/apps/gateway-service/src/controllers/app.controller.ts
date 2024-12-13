import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/welcome/:name')
  welcome(@Param('name') name: string): string {
    return this.appService.sayWelcome(name);
  }

  @Get('/todo/welcome')
  async getHelloFromTodo(): Promise<string> {
    // j'interroge le todo-service, je stocke la reponse dans result
    const result: Response = await fetch('http://todo-service:3001/welcome');
    return result.text();
  }

  @Get('/todo')
  async getAllTodos(): Promise<string> {
    // j'interroge le todo-service, je stocke la reponse dans result
    const result: Response = await fetch('http://todo-service:3001');
    return result.text();
  }
}
