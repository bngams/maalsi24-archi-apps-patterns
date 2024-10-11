import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/todo')
  async getHelloFromTodo(): Promise<string> {
    // j'interroge le todo-service, je stocke la reponse dans result
    const result: Response = await fetch('http://localhost:3001');
    return result.text();
  }

  @Get('/welcome/:name')
  welcome(@Param('name') name: string): string {
    return this.appService.sayWelcome(name);
  }
}