import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/modules/users.module';
import { PackagesController } from '../controllers/Packages.controller';
import { ReservedPackagesController } from '../controllers/ReservedPackages.controller';
import { PackageProvider } from '../providers/package.provider';
import { ReservedPackagesProvider as ReservedPackagesProvider } from '../providers/reservedPackages.provider';
import { PackagesService } from '../services/Packages.service';
import { ReservedPackagesService } from '../services/ReservedPackages.service';
import { HotelsModule } from './Hotels.module';
import { InsurancesModule } from './Insurances.module';
import { ShowsModule } from './Shows.module';
import { TicketsModule } from './Tickets.module';

@Module({
  imports: [
    InsurancesModule,
    ShowsModule,
    HotelsModule,
    TicketsModule,
    UsersModule,
  ],
  controllers: [ReservedPackagesController, PackagesController],
  providers: [
    ReservedPackagesService,
    PackagesService,
    ...PackageProvider,
    ...ReservedPackagesProvider,
  ],
  exports: [ReservedPackagesService, PackagesService],
})
export class PackagesModule {}
