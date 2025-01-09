import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class ShareEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number;

  @Column()
  shared_to_user_id: number;

  @Column()
  shared_by_user_id: number;

  @Column()
  created_at: Date;
}
