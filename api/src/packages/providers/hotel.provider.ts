import { Hotel } from '../entitities/hotel.entity';

export const HotelProvider = [
  {
    provide: 'HOTEL_REPOSITORY',
    useValue: Hotel,
  },
];
