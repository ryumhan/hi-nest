import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  path(@Param('id') movieid: string, @Body() updateData): string {
    return {
      updatedMovie: movieid,
      ...updateData,
    };
  }
}
