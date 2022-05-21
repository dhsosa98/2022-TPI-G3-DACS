import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ShowDto } from '../dtos/Shows.dto';
import { ShowsService } from '../services/Shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private showService: ShowsService) {}

  @Delete('/:showId')
  deleteShowById(@Param('showId') showId: number) {
    return this.showService.delete(Number(showId));
  }

  @Post('/')
  createShow(@Body() show: ShowDto) {
    return this.showService.create(show);
  }
}
