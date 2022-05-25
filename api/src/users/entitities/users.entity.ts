import {
  Table,
  Column,
  Model,
  Unique,
  ForeignKey,
  HasOne,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Package } from 'src/packages/entitities/packages.entity';
import { ReservedPackages } from 'src/packages/entitities/reservedPackages.entity';
import { Sale } from 'src/sales/entitities/sale.entity';
import { Role } from './rols.entity';

@Table({ tableName: 'Users', timestamps: false })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Unique
  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;

  @Column
  cuit: string;

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @BelongsTo(()=>Role)
  role: Role;

  @BelongsToMany(() => Package, () => Sale)
  sales: Package[];

  @BelongsToMany(() => Package, () => ReservedPackages)
  reserves: Package[];

  // @HasOne(() => Role)
  // role: Role;
}
