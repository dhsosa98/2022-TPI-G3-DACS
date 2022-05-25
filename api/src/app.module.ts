import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './app.middleware';
import { AppService } from './app.service';
import { DatabaseModule } from './database/modules/db.module';
import { PackagesModule } from './packages/modules/Packages.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MarketingModule } from './marketing/Marketing.module';
import { SaleModule } from './sales/sales.module';
import { AuthModule } from './auth/modules/auth.module';

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
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

