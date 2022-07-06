import { Injectable } from '@nestjs/common';
import { Favourites } from 'src/graphql';

@Injectable()
export class FavouritesService {
  private favourites: Favourites[] = [];

  findAll(): Favourites[] {
    return this.favourites;
  }

  findOneById(id: string): Favourites {
    return this.favourites.find((genre) => genre.id === id);
  }
}
