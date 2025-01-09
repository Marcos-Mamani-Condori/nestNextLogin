import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Comment } from './comment.entity';
  import {User} from './user.entity';
  import { Category } from './category.entity';
  
  @Entity()
  export class Post {
    @PrimaryGeneratedColumn()
    id: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column({ unique: true })
    slug: string;
  
    @Column()
    title: string;
  
    @Column()
    desc: string;
  
    @Column({ nullable: true })
    img: string;
  
    @Column({ default: 0 })
    views: number;
  
    @Column()
    catSlug: string;
  
    @ManyToOne(() => Category, (category) => category.posts)
    @JoinColumn({ name: 'catSlug', referencedColumnName: 'slug' })
    cat: Category;
  
    @Column()
    userEmail: string;
  
    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
    user: User;
  
    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];
  }
  