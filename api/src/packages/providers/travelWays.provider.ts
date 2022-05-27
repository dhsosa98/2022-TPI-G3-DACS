import { TravelWay } from '../entitities/travelWays.entity';

export const TravelWaysProvider = [
  {
    provide: 'TRAVEL_WAYS_REPOSITORY',
    useValue: TravelWay,
  },
];
