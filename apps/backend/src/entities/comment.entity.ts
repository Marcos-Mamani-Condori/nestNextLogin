import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { User } from './user.entity';
  import { Post } from './post.entity';
  
  @Entity()
  export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    text: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    user_id: number;
  
    @ManyToOne(() => User, (user) => user.comments, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @Column()
    post_id: number;
  
    @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
    @JoinColumn({ name: 'post_id' })
    post: Post;
  }
  