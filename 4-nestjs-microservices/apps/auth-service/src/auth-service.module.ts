import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { MongoModule } from './mongo.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongoModule,
    UsersModule
  ],
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
