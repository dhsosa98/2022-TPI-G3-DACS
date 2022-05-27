import { Sale } from '../entitities/sale.entity';

export const SaleProvider = [
  {
    provide: 'SALE_REPOSITORY',
    useValue: Sale,
  },
];
