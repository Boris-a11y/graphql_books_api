import { Book } from '../entity/Book';
import { AppDataSource } from '../data-source';

export const bookRepository = AppDataSource.getRepository(Book);
