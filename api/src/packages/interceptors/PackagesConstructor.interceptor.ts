import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HotelService } from '../services/Hotel.service';
import { InsuranceService } from '../services/Insurance.service';
import { ShowsService } from '../services/Shows.service';
import { TicketService } from '../services/Ticket.service';

@Injectable()
export class PackagesConstructor implements NestInterceptor {
  constructor(
    private insuranceService: InsuranceService,
    private ticketService: TicketService,
    private hotelService: HotelService,
    private showService: ShowsService,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const { body } = context.switchToHttp().getRequest();
    const { insuranceId, ticketId, hotelId, showId } = body;
    let total = 0;
    if (insuranceId) {
      const insurance = await this.insuranceService.findOne(insuranceId);
      total += insurance.amount;
    }
    if (ticketId) {
      const ticket = await this.ticketService.findOne(ticketId);
      total += ticket.amount;
    }
    if (hotelId) {
      const hotel = await this.hotelService.findOne(hotelId);
    }
    if (showId) {
      const show = await this.showService.findOne(showId);
      total += show.amount;
    }
    body.total = total;
    return next.handle();
  }
}
