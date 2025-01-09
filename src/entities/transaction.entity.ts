import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subscription_id: number;

  @Column()
  amount: number;

  @Column()
  mode: string;

  @Column()
  third_party_id: string;

  @Column()
  created_at: Date;
}
