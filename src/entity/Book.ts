import { Field, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  author: string;

  @Field(() => String)
  @Column({ unique: true })
  name: string;

  @Field(() => String)
  @Column()
  description?: string;

  @Field(() => Number)
  @Column()
  rating: number;
}
