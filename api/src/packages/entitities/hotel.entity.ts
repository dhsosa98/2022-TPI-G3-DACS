import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Reserve } from './reserve.entity';

@Table({ tableName: 'Hotels', timestamps: false })
export class Hotel extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  address: string;

  @Column
  phone: number;

  //   @ForeignKey(() => Reserve)
  //   @Column
  //   reserveId: number;
}
