import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { StatusController } from './controllers/status.controller';
import { StatusService } from './services/status.service';

@Module({
  imports: [],
  controllers: [AppController, StatusController],
  providers: [AppService, StatusService],
})
export class AppModule {}
