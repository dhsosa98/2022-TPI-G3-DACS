import { Table, Column, Model, BelongsTo } from 'sequelize-typescript';
import { User } from './users.entity';

@Table({ tableName: 'Rols', timestamps: false })
export class Role extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  description: string;
}
