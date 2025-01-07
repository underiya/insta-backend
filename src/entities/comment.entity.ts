import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  post_id: number;

  @Column({})
  comments: string[];
}
