import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { RoleProvider } from '../providers/role.provider';
import { UserProvider } from '../providers/users.provider';
import { RoleService } from '../services/role.service';
import { UserService } from '../services/users.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [...UserProvider, UserService, RoleService, ...RoleProvider],
  exports: [UserService],
})
export class UsersModule {}
