import {
  Post,
  Body,
  Controller,
  Get,
  Request,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateUserDto, UpdateUserDto } from '../dtos/createuser.dto';
import { UserService } from '../services/users.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Roles(Role.Admin)
  getUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  @Roles(Role.Admin)
  getUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post('/')
  @Roles(Role.Admin)
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Delete('/:id')
  @Roles(Role.Admin)
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }

  @Patch('/:id')
  @Roles(Role.Admin)
  updateUser(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.userService.update(id, user);
  }
}
