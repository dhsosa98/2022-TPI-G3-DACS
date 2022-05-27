import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Sale } from 'src/sales/entitities/sale.entity';
import { User } from 'src/users/entitities/users.entity';
import { Hotel } from './hotel.entity';
import { Insurance } from './insurances.entity';
import { ReservedPackages } from './reservedPackages.entity';
import { Show } from './shows.entity';
import { Ticket } from './tickets.entity';

@Table({ tableName: 'Packages', timestamps: false })
export class Package extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  total: number;

  @Column
  quantPeople: number;

  @ForeignKey(() => Hotel)
  @Column
  hotelId: number;

  @ForeignKey(() => Ticket)
  @Column
  ticketId: number;

  @ForeignKey(() => Insurance)
  @Column
  insuranceId: number;

  @ForeignKey(() => Show)
  @Column
  showId: number;

  @BelongsTo(() => Hotel)
  hotel: Hotel;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @BelongsTo(() => Insurance)
  insurance: Insurance;

  @BelongsTo(() => Show)
  show: Show;

  @BelongsToMany(() => User, () => Sale)
  sales: User[];

  @BelongsToMany(() => User, () => ReservedPackages)
  reserves: User[];
}
