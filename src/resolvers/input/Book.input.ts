import { Length, MaxLength } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class BookInput {
  @Field(() => String)
  @MaxLength(15)
  author: string;

  @Field(() => String)
  @MaxLength(30)
  name: string;

  @Field(() => String)
  @Length(10, 255)
  description: string;

  @Field(() => Number)
  rating: number;
}
