import { Show } from '../entitities/shows.entity';

export const ShowsProvider = [
  {
    provide: 'SHOW_REPOSITORY',
    useValue: Show,
  },
];
