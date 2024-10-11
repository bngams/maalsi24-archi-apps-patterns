import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  checkStatus(): string {
    return 'App is running';
  }
}
