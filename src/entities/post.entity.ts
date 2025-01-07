import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

export enum Visibility {
  Private = 'private',
  Public = 'public',
}
@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  @Index()
  userId: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: Visibility, default: Visibility.Public })
  visibility: Visibility;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
