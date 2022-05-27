import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/entitities/users.entity';
import { Package } from './packages.entity';

@Table({ tableName: 'PackageBookings', timestamps: false })
export class ReservedPackages extends Model {
  @Column({ defaultValue: true })
  pending: boolean;

  @Column
  subTotal: number;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  userId: number;

  @PrimaryKey
  @ForeignKey(() => Package)
  @Column
  packId: number;

  @BelongsTo(() => Package)
  pack: Package;
}
