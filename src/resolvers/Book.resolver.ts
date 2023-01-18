import { Book } from '../entity/Book';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { BookInput } from '../resolvers/input/Book.input';
import { bookRepository } from './bookRepository';
import { UpdateResult } from 'typeorm';

@Resolver()
class BookResolver {
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return await bookRepository.find();
  }

  @Mutation(() => Book)
  async addBook(
    @Arg('data') newBookData: BookInput,
  ): Promise<BookInput & Book> {
    return await bookRepository.save(newBookData);
  }

  @Mutation(() => Boolean)
  async deleteBook(@Arg('id') id: number) {
    await bookRepository.delete({ id });
    return true;
  }

  @Mutation(() => Book)
  async updateBook(
    @Arg('id') id: number,
    @Arg('data') newBookData: BookInput,
  ): Promise<UpdateResult> {
    return await bookRepository.update({ id }, newBookData);
  }
}
