import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { ReservedPackagesService } from 'src/packages/services/ReservedPackages.service';
import { MailerService } from '@nestjs-modules/mailer';
import { SalesService } from 'src/sales/services/sales.service';
import { User } from 'src/users/entitities/users.entity';
import { Package } from 'src/packages/entitities/packages.entity';
import { Hotel } from 'src/packages/entitities/hotel.entity';
import { Ticket } from 'src/packages/entitities/tickets.entity';
import { Op, Sequelize } from 'sequelize';
import { UserService } from 'src/users/services/users.service';
import { Sale } from 'src/sales/entitities/sale.entity';
import { Show } from 'src/packages/entitities/shows.entity';
import { Insurance } from 'src/packages/entitities/insurances.entity';
import { TravelWay } from 'src/packages/entitities/travelWays.entity';

@Injectable()
export class MarketingService {
  private readonly logger = new Logger(MarketingService.name);
  constructor(
    private userService: UserService,
    private mailerService: MailerService,
  ) {}

  async sendMail(email: string, name: string, packs: any[]) {
    const total = packs.reduce((ant, curr) => {
      return ant + curr.total;
    }, 0);
    if (packs.length) {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Dont forget your Packages',
        template: '/email',
        context: {
          email: email,
          name: name,
          packs: packs,
          sale: {
            id: packs[0].Sale.id,
            saleDate: packs[0].Sale.saleDate,
            total,
          },
        },
      });
    }
  }

  @Cron('* * 19 27 * *')
  // @Timeout(3000)
  async handleNotifications() {
    const date = new Date();
    date.setDate(date.getDate() + 60);
    const salesByUser = await this.userService.findAll({
      include: [
        {
          model: Package,
          as: 'sales',
          include: [
            {
              model: Ticket,
              where: {
                departureDate: {
                  [Op.lt]: date,
                },
              },
              include: TravelWay,
            },
            Show,
            Hotel,
            Insurance,
          ],
        },
      ],
    });
    // return salesByUser;
    salesByUser.forEach(async (user) => {
      const { email, firstName, lastName, sales } = user as any;
      const packs = sales.map(
        ({
          name,
          total,
          quantPeople,
          ticket,
          show,
          hotel,
          insurance,
          id,
          Sale,
        }) => {
          return {
            name,
            total,
            quantPeople,
            ticket,
            show,
            hotel,
            insurance,
            id,
            Sale,
          };
        },
      );
      await this.sendMail(email, `${firstName} ${lastName}`, packs);
    });
    this.logger.debug('Called in intervals of 10 seconds');
  }
}
