import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { GetPagination } from 'src/decorators/pagination.decorator';
import { Roles } from 'src/decorators/roles.decorator';
import { TicketDto, TicketOnUpdateDto } from '../dtos/Tickets.dto';
import { TicketService } from '../services/Ticket.service';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketService) {}

  @Patch('/:ticketId')
  @Roles(Role.Admin)
  updateTicketById(
    @Param('ticketId') ticketId: number,
    @Body() ticket: TicketOnUpdateDto,
  ) {
    return this.ticketsService.update(ticketId, ticket);
  }

  @Get()
  @Public()
  getAllTickets(@GetPagination() options: any) {
    return this.ticketsService.findAll(options);
  }

  @Get('/:ticketId')
  @Public()
  getTicketById(@Param('ticketId') ticketId: number) {
    return this.ticketsService.findOne(ticketId);
  }

  @Post()
  @Roles(Role.Admin)
  createTicket(@Body() ticket: TicketDto) {
    return this.ticketsService.create(ticket);
  }

  @Delete('/:ticketId')
  @Roles(Role.Admin)
  deleteTicketById(@Param('ticketId') ticketId: number) {
    return this.ticketsService.delete(ticketId);
  }
}
