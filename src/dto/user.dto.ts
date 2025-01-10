import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { account_status } from 'src/entities/user.entity';

export class createUserDto {
  @IsString()
  username: string;

  @IsString()
  first_name: string;

  @IsString()
  @IsStrongPassword()
  last_name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class loginUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class UpdateUserDto {
  @IsString()
  username: string;

  @IsString()
  first_name: string;

  @IsString()
  @IsStrongPassword()
  last_name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsString()
  bio: string;

  account_status: account_status;
}
