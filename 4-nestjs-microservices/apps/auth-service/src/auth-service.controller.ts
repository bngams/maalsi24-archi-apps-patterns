import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { Credentials } from './models/credentials';
import { User } from './modules/users/entities/user.entity';

@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() credentials: Credentials) {
    return this.authService.signIn(credentials.username, credentials.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() user: User) {
    return this.authService.signUp(user);
  }
}
