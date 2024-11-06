import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './modules/users/users.service';
import { User } from './modules/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthServiceService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<string> {
    const user = await this.usersService.findOne(username);
    if (await !this.usersService.hashCompare(pass, user.password)) {
      throw new UnauthorizedException();
    }
    // gen token with payload
    const payload = { id: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }

  async signUp(user: User): Promise<Partial<User>> {
    // validation logic
    // if (!user.password) {
    //   throw new ...();
    // }
    // if (email already exists...)

    // user creation
    user = await this.usersService.create(user);
    const { password, ...result } = user;
    return result;
  }
}
