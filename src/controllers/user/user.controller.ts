import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup() {
    return this.userService.createUser();
  }
  @Get('login')
  login() {
    return this.userService.loginUser();
  }
}
