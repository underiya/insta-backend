import {
  Headers,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { createUserDto, loginUserDto } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { account_status, UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @Inject() private readonly jwtService: JwtService,
  ) {}
  async createUser(userData) {
    const user = new createUserDto();
    user.username = userData.username;
    user.first_name = userData.first_name;
    user.last_name = userData.last_name;
    user.email = userData.email;
    user.password = userData.password;

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }

  async loginUser(userData: loginUserDto) {
    console.log(process.env.NODE_JWT_SECRETKEY);
    const user = await this.userRepository.findOne({
      where: {
        email: userData.email,
      },
    });

    if (!user) {
      throw new HttpException(
        `No user found with email: ${userData.email}!`,
        HttpStatus.NOT_FOUND,
      );
    }

    const isValid = await bcrypt.compare(userData.password, user.password);

    if (!isValid) {
      throw new HttpException('Invalid password!', HttpStatus.UNAUTHORIZED);
    }

    const payload = { id: user.id, email: user.email };

    const token = this.jwtService.sign(payload);

    return {
      message: `Login successfull, welcome ${user.username}!`,
      user,
      token,
    };
  }

  async updateUser(userData, email) {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    user.username = userData.username;
    user.first_name = userData.first_name;
    user.last_name = userData.last_name;
    user.email = userData.email;
    user.password = userData.password;
    user.bio = userData.bio;
    user.account_status =
      userData.account_status === account_status.private
        ? account_status.private
        : account_status.public;
    return this.userRepository.save(user);
  }
}
