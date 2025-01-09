import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

Entity();
export class LikesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number;

  @Column()
  comment_id: number;

  @Column()
  likes: number;

  @Column()
  created_at: Date;
}
