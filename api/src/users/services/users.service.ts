import {
  Inject,
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';
import { Role } from '../entitities/roles.entity';
import { User } from '../entitities/users.entity';
import { RoleService } from './role.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: typeof User,
    private roleService: RoleService,
  ) {}

  async findOne(id: any): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      include: [Role],
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async findAuth(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email }, include: [Role] });
  }

  // BUSAR TODOS LOS USUARIOS NO ES NECESARIO PERO QUERIA PROBAR :)
  async findAll(options?: any): Promise<User[]> {
    return await this.userRepository.findAll(options);
  }

  async create(user: CreateUserDto): Promise<any> {
    let { roleId } = user;
    const { password } = user;
    const roles = await this.roleService.findAll();
    const exist = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (exist) {
      throw new ConflictException('User already exists');
    }
    if (!roleId) {
      roleId = roles[0].id;
    }
    if (roleId) {
      if (!roles.find((role) => role.id === roleId)) {
        throw new ConflictException('Invalid role');
      }
    }
    const newUser = await this.userRepository.create({
      ...user,
      password: await bcrypt.hash(
        password,
        Number(process.env.HASH_SALT) || 10,
      ),
      roleId,
    });
    await newUser.save();
    return newUser;
  }

  async delete(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await user.destroy();
    return user;
  }
}
