
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  
    constructor(
       @InjectRepository(User) private userRepository: Repository<User>
    ) {} 

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ username });
    }

    async create(user: User): Promise<User | undefined> {
        user.password = await this.hashPassword(user.password);
        return await this.userRepository.save(user);
    }

    async hashPassword(password: string): Promise<string> {
        // or  await bcrypt.genSalt();
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    } 

    async hashCompare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    } 
}
