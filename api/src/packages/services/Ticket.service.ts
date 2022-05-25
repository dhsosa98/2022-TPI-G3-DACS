import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { TicketDto, TicketOnUpdateDto } from '../dtos/Tickets.dto';
import { Ticket } from '../entitities/tickets.entity';
import { TravelWay } from '../entitities/travelWays.entity';
import { TravelWaysService } from './TravelWays.service';

@Injectable()
export class TicketService {
  constructor(
    @Inject('TICKET_REPOSITORY')
    private ticketRepository: typeof Ticket,
    private travelWaysService: TravelWaysService,
  ) {}

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      throw new NotFoundException('Ticket does not exist');
    }
    return ticket;
  }

  async findAll(options?: any): Promise<Ticket[]> {
    return await this.ticketRepository.findAll({
      ...options,
      include: TravelWay,
    });
  }

  async delete(id: number): Promise<Ticket> {
    const ticket = await this.findOne(id);
    await this.ticketRepository.destroy({ where: { id } });
    return ticket;
  }

  async create(ticket: TicketDto): Promise<Ticket> {
    const { travelWayId } = ticket;
    const travelWays = await this.travelWaysService.findAll();
    if (!travelWayId) {
      throw new UnauthorizedException('Must be a travel way');
    }
    if (!travelWays.find((travelWay) => travelWay.id === travelWayId)) {
      throw new UnauthorizedException('Invalid travel way');
    }
    const newTicket = await this.ticketRepository.create({ ...ticket });
    await newTicket.save();
    return newTicket;
  }

  async update(ticketId: number, ticket: TicketOnUpdateDto) {
    const { travelWayId } = ticket;
    const ticketToUpdate = await this.findOne(ticketId);
    const travelWays = await this.travelWaysService.findAll();
    if (travelWayId) {
      if (!travelWays.find((travelWay) => travelWay.id === travelWayId)) {
        throw new UnauthorizedException('Invalid travel way');
      }
    }
    ticketToUpdate.seat = ticket.seat;
    ticketToUpdate.departureDate = ticket.departureDate;
    ticketToUpdate.returnDate = ticket.returnDate;
    ticketToUpdate.amount = ticket.amount;
    ticketToUpdate.travelWayId = travelWayId;
    await ticketToUpdate.save();
    return ticketToUpdate;
  }
}
