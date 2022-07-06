import { Args, Query, Resolver } from '@nestjs/graphql';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Query()
  async track(@Args('id') id: string) {
    return this.artistsService.findOneById(id);
  }

  @Query()
  async tracks() {
    return this.artistsService.findAll();
  }
}
