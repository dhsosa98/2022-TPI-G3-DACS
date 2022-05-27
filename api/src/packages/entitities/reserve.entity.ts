import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Room } from './rooms.entity';

@Table({ tableName: 'ReserveHabs', timestamps: false })
export class Reserve extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  departureDate: Date;

  @Column
  returnDate: Date;

  @Column
  @ForeignKey(() => Room)
  roomId: number;
}
