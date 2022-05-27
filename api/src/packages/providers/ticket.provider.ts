import { Ticket } from '../entitities/tickets.entity';

export const TicketProvider = [
  {
    provide: 'TICKET_REPOSITORY',
    useValue: Ticket,
  },
];
