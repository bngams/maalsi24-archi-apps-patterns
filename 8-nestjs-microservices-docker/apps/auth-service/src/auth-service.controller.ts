import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { Credentials } from './models/credentials';
import { User } from './modules/users/entities/user.entity';
import { AuthGuard } from './auth.guard';

@Controller()
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() credentials: Credentials) {
    // TODO: send as cookie secure
    // response.cookie('token', data.access_token, {
    //   httpOnly: true,
    //   secure: false,
    //   sameSite: 'lax',
    // });
    return this.authService.signIn(credentials.username, credentials.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() user: User) {
    return this.authService.signUp(user);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  me() {
    return 'I am logged in';
  }
}
