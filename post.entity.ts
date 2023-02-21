import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
import { PostStatistics } from './post-statistics.entity';

@Entity({name: 'posts'})
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Column({type: 'varchar', default: 'Test', length: 200})
  title: string;

  @Column()
  content: string;
  
  @OneToMany(() => PostStatistics, (postStatistics) => postStatistics.post)
  statistics: PostStatistics;
}