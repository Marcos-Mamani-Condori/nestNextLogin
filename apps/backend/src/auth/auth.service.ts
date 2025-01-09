import { ConflictException, Injectable } from '@nestjs/common';
import { createUserDto } from '../user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ){}
    registerUser(User: createUserDto){
        const user = this.userService.findByEmail(User.email)
        if(user) throw new ConflictException("Este Usuario Ya Existe!")
           return this.userService.create(User)
    }
}
