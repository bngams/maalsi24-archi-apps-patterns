import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './modules/users/users.service';
import { User } from './modules/users/entities/user.entity';

@Injectable()
export class AuthServiceService {

  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (await !this.usersService.hashCompare(pass, user.password)) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user; 
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
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
