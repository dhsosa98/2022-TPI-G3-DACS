import { User } from '../entitities/users.entity';

export const UserProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
