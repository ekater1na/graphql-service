import { Injectable } from '@nestjs/common';
import { Album } from 'src/graphql';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [];

  findAll(): Album[] {
    return this.albums;
  }

  findOneById(id: string): Album {
    return this.albums.find((album) => album.id === id);
  }
}
