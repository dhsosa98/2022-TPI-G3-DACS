import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { Hotel } from 'src/packages/entitities/hotel.entity';
import { Insurance } from 'src/packages/entitities/insurances.entity';
import { Package } from 'src/packages/entitities/packages.entity';
import { Reserve } from 'src/packages/entitities/reserve.entity';
import { ReservedPackages } from 'src/packages/entitities/reservedPackages.entity';
import { Room } from 'src/packages/entitities/rooms.entity';
import { Show } from 'src/packages/entitities/shows.entity';
import { Ticket } from 'src/packages/entitities/tickets.entity';
import { TravelWay } from 'src/packages/entitities/travelWays.entity';
import { Sale } from 'src/sales/entitities/sale.entity';
import { Role } from 'src/users/entitities/roles.entity';
import { User } from 'src/users/entitities/users.entity';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME || 'database_development',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: (process.env.DB_DIALECT as Dialect) || 'mysql',
      });
      sequelize.addModels([
        Role,
        User,
        Insurance,
        Show,
        Hotel,
        Reserve,
        Room,
        Ticket,
        TravelWay,
        Package,
        Sale,
        ReservedPackages,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
