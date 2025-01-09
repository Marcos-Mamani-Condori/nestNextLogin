import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/createUser.dto';
import { hash } from 'argon2';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>
    ){}

    async create (User: createUserDto){
        const { password, ...user} = User;
        const hashedPassword =await hash(password)
        const newUser = this.UserRepository.create({ 
            ...user,
            password: hashedPassword,
          });
          return await this.UserRepository.save(newUser);
    }
    async findByEmail(email: string){
        this.UserRepository.findOneBy({email})
    }
}
