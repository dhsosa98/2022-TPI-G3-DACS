import {
  Post,
  Body,
  Controller,
  Get,
  Request,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';
import { UserService } from '../services/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @Get()
  // getUsers(user) {
  //   return this.userService.findAll(user);
  // }

  @Get('/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.findAuth(email);
  }

  @Get('/:id')
  getUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post('/')
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
