import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoServiceService {
  getHello(): string {
    return 'Hello World from todo-service!';
  }
}
