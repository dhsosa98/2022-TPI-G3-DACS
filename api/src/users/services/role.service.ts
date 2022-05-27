import { Injectable, Inject } from '@nestjs/common';
import { Role } from '../entitities/roles.entity';

@Injectable()
export class RoleService {
  constructor(@Inject('ROLE_REPOSITORY') private roleRepository: typeof Role) {}

  async findAll(): Promise<Role[]> {
    const roles = await this.roleRepository.findAll();
    if (!roles.length) {
      await this.create({ description: 'user' });
    }
    return await this.roleRepository.findAll();
  }

  async create(role: any): Promise<Role> {
    const newRole = new Role({ ...role });
    await newRole.save();
    return newRole;
  }
}
