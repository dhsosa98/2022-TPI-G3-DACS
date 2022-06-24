import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { TravelWay } from './travelWays.entity';

@Table({ tableName: 'Tickets', timestamps: false })
export class Ticket extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  seat: number;

  @Column
  departureDate: Date;

  @Column
  returnDate: Date;

  @Column
  amount: number;

  @ForeignKey(() => TravelWay)
  @Column
  travelWayId: number;

  @BelongsTo(() => TravelWay)
  travelWay: TravelWay;
}
