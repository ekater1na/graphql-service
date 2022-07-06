import { Args, Query, Resolver } from '@nestjs/graphql';
import { AlbumsService } from '../services/albums.service';

@Resolver('Album')
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Query()
  async track(@Args('id') id: string) {
    return this.albumsService.findOneById(id);
  }

  @Query()
  async tracks() {
    return this.albumsService.findAll();
  }
}
