import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GetPagination } from 'src/decorators/pagination.decorator';
import { ShowDto, ShowOnUpdateDto } from '../dtos/Shows.dto';
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

  @Get('/')
  findAllShows(@GetPagination() options: any) {
    return this.showService.findAll(options);
  }

  @Get('/:showId')
  findShowById(@Param('showId') showId: number) {
    return this.showService.findOne(Number(showId));
  }

  @Patch('/:showId')
  updateShowById(@Param('showId') showId: number, @Body() show: ShowOnUpdateDto) {
    return this.showService.update(showId, show);
  }
}
