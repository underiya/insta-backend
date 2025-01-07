import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser() {
    return 'user created';
  }
  loginUser() {
    return 'user loggedin';
  }
}
