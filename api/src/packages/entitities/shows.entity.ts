import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Shows', timestamps: false })
export class Show extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  seat: number;

  @Column
  dateShow: Date;

  @Column
  amount: number;
}
