import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FollowersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  follower_id: number;

  @Column()
  following_id: number;
}
