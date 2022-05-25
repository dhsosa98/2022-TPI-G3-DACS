import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GetPagination } from 'src/decorators/pagination.decorator';
import { TicketDto } from '../dtos/Tickets.dto';
import { TicketService } from '../services/Ticket.service';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketService) {}

  @Get()
  getAllTickets(@GetPagination() options: any) {
    return this.ticketsService.findAll(options);
  }

  @Get('/:ticketId')
  getTicketById(@Param('ticketId') ticketId: number) {
    return this.ticketsService.findOne(ticketId);
  }

  @Post()
  createTicket(@Body() ticket: TicketDto) {
    return this.ticketsService.create(ticket);
  }

  @Delete('/:ticketId')
  deleteTicketById(@Param('ticketId') ticketId: number) {
    return this.ticketsService.delete(ticketId);
  }
}
