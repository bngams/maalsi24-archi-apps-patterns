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
}
