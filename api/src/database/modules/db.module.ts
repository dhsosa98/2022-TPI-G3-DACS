import { Module } from '@nestjs/common';
import { DatabaseProviders } from 'src/database/providers/db.provider';

@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
