import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private service: BooksService) {}

  @Get()
  async getAll() {
    const books = await this.service.getAll();
    return books;
  }

  @Get(':bookID')
  async get(@Param('bookID') bookID) {
    const book = await this.service.get(bookID);
    return book;
  }

  @Post()
  async add(@Body() dto: CreateBookDTO) {
    const book = this.service.add(dto);
    return book;
  }

  @Delete()
  async delete(@Query() query) {
    const books = await this.service.delete(query.bookID);
    return books;
  }
}
