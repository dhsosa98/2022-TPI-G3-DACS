import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ControlTourismService } from '../services/controlTourism.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 1,
      }),
    }),
  ],
  controllers: [],
  providers: [ControlTourismService],
  exports: [ControlTourismService],
})
export class ControlTourismModule {}
