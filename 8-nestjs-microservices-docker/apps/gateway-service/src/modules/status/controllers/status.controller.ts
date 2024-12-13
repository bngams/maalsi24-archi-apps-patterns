import { Controller, Get } from '@nestjs/common';
import { StatusService } from '../services/status.service';

@Controller('status')
export class StatusController {
  // c'est le constructor qui créé l'attribut statusService
  constructor(readonly statusService: StatusService) {}

  @Get('')
  getStatus(): string {
    return this.statusService.checkStatus();
  }
}
