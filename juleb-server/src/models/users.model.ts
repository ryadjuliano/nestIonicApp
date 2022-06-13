import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 50 })
  title: string;

  @Column()
  reward: number;

  @Column()
  active: boolean;

  @Column() createdAt: Date = new Date();
  @Column() createdBy = 'user';
  @Column() isDeleted = false;
}
