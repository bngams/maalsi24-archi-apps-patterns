import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { MongoModule } from './mongo.module';
import { UsersModule } from './modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    MongoModule,
    UsersModule, // UsersService
    JwtModule.register({
      global: true,
      secret: 'XNS4Qhc8EA9YxhGmTJTA5ntr', // TODO: store as env. var
      signOptions: { expiresIn: '180s' },
    }),
  ],
  controllers: [AuthServiceController],
  providers: [AuthServiceService, AuthGuard],
})
export class AuthServiceModule {}
