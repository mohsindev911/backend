import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Library } from './Schemas/library.schema';
import { Model } from 'mongoose';
import { Book } from './Schemas/book.schema';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Library.name) private LibraryModel:Model<Library>,
        @InjectModel(Book.name) private BookModel:Model<Book>
    ){}

    async createLibrary(Data: Partial<Library>): Promise<Library> {
       const newBook= await new  this.BookModel(Data.book).save();
       const newLibrary = new this.LibraryModel({ ...Data, book: newBook._id });
       return await newLibrary.save();
    }
}
