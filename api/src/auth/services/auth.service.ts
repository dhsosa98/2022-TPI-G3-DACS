import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from 'src/users/dtos/createuser.dto';
import { User } from 'src/users/entitities/users.entity';
import { UserService } from 'src/users/services/users.service';
import { RegisterUserDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(user: RegisterUserDto): Promise<User> {
    return await this.usersService.create(user as CreateUserDto);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findAuth(email);
    const isValid = await bcrypt.compare(pass, user.password);
    if (user && isValid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // const payload = { email: user.email, uid: user.id, rol: user.rolId };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
    return user;
  }
}
