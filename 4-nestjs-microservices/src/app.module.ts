import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { StatusModule } from './modules/status/status.module';

@Module({
  imports: [StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
