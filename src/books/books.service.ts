import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from './mock/books.mock';
import { resolve } from 'dns';

@Injectable()
export class BooksService {
  books = BOOKS;

  getAll(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  get(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise(resolve => {
      const book = this.books.find(it => it.id === id);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }

  add(book): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  delete(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise(resolve => {
      const index = this.books.findIndex(it => it.id === id);
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }
      this.books.splice(1, index);
      resolve(this.books);
    });
  }
}
