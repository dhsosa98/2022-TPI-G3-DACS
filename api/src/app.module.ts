import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './app.middleware';
import { AppService } from './app.service';
import { DatabaseModule } from './database/modules/db.module';
import { PackagesModule } from './packages/modules/Packages.module';
import { UsersModule } from './users/modules/users.module';
import { ConfigModule } from '@nestjs/config';
import { MarketingModule } from './marketing/modules/Marketing.module';
import { SaleModule } from './sales/modules/sales.module';
import { AuthModule } from './auth/modules/auth.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { JwtAuthGuard } from './auth/guards/auth.guard';

@Module({
  imports: [
    PackagesModule,
    UsersModule,
    MarketingModule,
    DatabaseModule,
    SaleModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    {
      provide: 'APP_GUARD',
      useClass: RolesGuard,
    },
  ],
})
// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('*');
//   }
export class AppModule {}
