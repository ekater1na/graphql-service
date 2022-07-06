import { Injectable } from '@nestjs/common';
import { Genre } from 'src/graphql';

@Injectable()
export class GenresService {
  private genres: Genre[] = [];

  findAll(): Genre[] {
    return this.genres;
  }

  findOneById(id: string): Genre {
    return this.genres.find((genre) => genre.id === id);
  }
}
