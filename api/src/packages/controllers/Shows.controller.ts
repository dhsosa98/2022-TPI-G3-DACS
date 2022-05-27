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
import { CreateQueries } from 'src/decorators/queries.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { ShowDto, ShowOnUpdateDto } from '../dtos/Shows.dto';
import { ShowsService } from '../services/Shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private showService: ShowsService) {}

  @Delete('/:showId')
  @Roles(Role.Admin)
  deleteShowById(@Param('showId') showId: number) {
    return this.showService.delete(Number(showId));
  }

  @Post('/')
  @Roles(Role.Admin)
  createShow(@Body() show: ShowDto) {
    return this.showService.create(show);
  }

  @Get('/')
  @Public()
  findAllShows(@CreateQueries() options: any) {
    return this.showService.findAll(options);
  }

  @Get('/:showId')
  @Public()
  findShowById(@Param('showId') showId: number) {
    return this.showService.findOne(Number(showId));
  }

  @Patch('/:showId')
  @Roles(Role.Admin)
  updateShowById(
    @Param('showId') showId: number,
    @Body() show: ShowOnUpdateDto,
  ) {
    return this.showService.update(showId, show);
  }
}
