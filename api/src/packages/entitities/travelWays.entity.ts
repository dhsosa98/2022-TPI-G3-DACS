import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { Ticket } from './tickets.entity';

@Table({ tableName: 'TravelWays', timestamps: false })
export class TravelWay extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;
}
