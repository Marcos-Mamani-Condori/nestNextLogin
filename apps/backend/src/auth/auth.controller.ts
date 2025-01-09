import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from '../user/dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("signup")
  RegisterUser(@Body() User: createUserDto){
    return this.authService.registerUser(User)
  }
}
