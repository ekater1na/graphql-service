import { Injectable } from '@nestjs/common';
import { Artist } from 'src/graphql';

@Injectable()
export class ArtistsService {
  private artists: Artist[] = [];

  findAll(): Artist[] {
    return this.artists;
  }

  findOneById(id: string): Artist {
    return this.artists.find((artist) => artist.id === id);
  }
}
