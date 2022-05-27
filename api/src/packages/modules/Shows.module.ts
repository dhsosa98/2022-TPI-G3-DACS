import { Module } from '@nestjs/common';
import { ShowsController } from '../controllers/Shows.controller';
import { ShowsProvider } from '../providers/shows.provider';
import { ShowsService } from '../services/Shows.service';

@Module({
  imports: [],
  controllers: [ShowsController],
  providers: [...ShowsProvider, ShowsService],
  exports: [ShowsService],
})
export class ShowsModule {}
