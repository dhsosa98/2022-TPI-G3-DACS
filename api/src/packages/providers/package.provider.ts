import { Package as Package } from '../entitities/packages.entity';

export const PackageProvider = [
  {
    provide: 'PACKAGE_REPOSITORY',
    useValue: Package,
  },
];
