import { Module } from '@nestjs/common';
import { MarketingService } from '../services/MarketingService.service';
import { ScheduleModule } from '@nestjs/schedule';
import { PackagesModule } from 'src/packages/modules/Packages.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { UsersModule } from 'src/users/modules/users.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PackagesModule,
    UsersModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('EMAIL_HOST'),
          service: 'Gmail',
          port: 465,
          secure: true,
          auth: {
            user: config.get('EMAIL_USER'),
            pass: config.get('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: 'Marketing Area <' + config.get('EMAIL_USER') + '>',
        },
        template: {
          dir: join(__dirname, '../templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [MarketingService],
})
export class MarketingModule {}
