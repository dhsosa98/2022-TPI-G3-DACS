import { Module } from '@nestjs/common';
import { TicketsController } from '../controllers/Ticket.controller';
import { TravelWaysController } from '../controllers/TravelWays.controller';
import { TicketProvider } from '../providers/ticket.provider';
import { TravelWaysProvider } from '../providers/travelWays.provider';
import { TicketService } from '../services/Ticket.service';
import { TravelWaysService } from '../services/TravelWays.service';

@Module({
  imports: [],
  controllers: [TicketsController, TravelWaysController],
  providers: [
    TravelWaysService,
    TicketService,
    ...TicketProvider,
    ...TravelWaysProvider,
  ],
  exports: [TicketService],
})
export class TicketsModule {}
