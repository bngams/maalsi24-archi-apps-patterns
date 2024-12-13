import { Module } from '@nestjs/common';
import { StatusController } from './controllers/status.controller';
import { StatusService } from './services/status.service';

@Module({
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
