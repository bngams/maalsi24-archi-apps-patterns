import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { Credentials } from './models/credentials';

@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() credentials: Credentials) {
    return this.authService.signIn(credentials.username, credentials.password);
  }
}
