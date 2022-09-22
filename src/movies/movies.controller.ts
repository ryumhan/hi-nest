import { Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string): string {
    return `This will delete a movie with the id: ${id}`;
  }

  @Patch('/:id')
  path(@Param('id') movieid: string): string {
    return `This will patch a movie with the id : ${movieid}`;
  }
}