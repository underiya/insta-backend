import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class SubscriptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  is_active: boolean;

  @Column()
  created_at: Date;
}
