import { ReservedPackages } from '../entitities/reservedPackages.entity';

export const ReservedPackagesProvider = [
  {
    provide: 'RESERVED_PACKAGES_REPOSITORY',
    useValue: ReservedPackages,
  },
];
