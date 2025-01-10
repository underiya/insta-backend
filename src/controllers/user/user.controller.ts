import {
  Body,
  Controller,
  Get,
  Headers,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { createUserDto, loginUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  signup(@Body() userData: createUserDto) {
    return this.userService.createUser(userData);
  }

  @Get('login')
  login(@Headers() loginHeaders: loginUserDto) {
    return this.userService.loginUser(loginHeaders);
  }

  @Patch('update')
  @UseGuards(AuthGuard)
  updateUser(@Body() userData: UpdateUserDto, @Req() request: any) {
    return this.userService.updateUser(userData, request.email);
  }
}
