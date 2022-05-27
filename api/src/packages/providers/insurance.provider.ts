import { Insurance } from '../entitities/insurances.entity';

export const InsuranceProvider = [
  {
    provide: 'INSURANCE_REPOSITORY',
    useValue: Insurance,
  },
];
