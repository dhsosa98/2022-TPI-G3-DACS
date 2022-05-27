import { Table, Model, Column, Unique, ForeignKey } from 'sequelize-typescript';
import { Hotel } from './hotel.entity';

@Table({ tableName: 'Rooms', timestamps: false })
export class Room extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  numBeds: number;

  @Column
  description: string;

  @Column
  amount: number;

  @Column
  type: string;

  @Column
  roomNumber: number;

  //   @HasOne(() => Rol)
  //   role: Rol;
}
