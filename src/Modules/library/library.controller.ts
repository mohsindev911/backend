import { Body, Controller, Post } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Library } from './Schemas/library.schema';

@Controller('library')
export class LibraryController {
    constructor(private readonly libraryService: LibraryService){}

    @Post()
    async createLibrary(@Body() Data: Partial<Library>) {
        return await this.libraryService.createLibrary(Data);
    }
}
