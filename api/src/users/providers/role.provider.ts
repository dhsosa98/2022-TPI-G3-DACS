import { Role } from '../entitities/roles.entity';

export const RoleProvider = [
  {
    provide: 'ROLE_REPOSITORY',
    useValue: Role,
  },
];
