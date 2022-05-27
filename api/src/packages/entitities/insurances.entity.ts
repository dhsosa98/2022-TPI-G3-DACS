import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Insurances', timestamps: false })
export class Insurance extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  amount: number;
}
