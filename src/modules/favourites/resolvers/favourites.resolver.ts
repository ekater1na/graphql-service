import { Args, Query, Resolver } from '@nestjs/graphql';
import { FavouritesService } from '../services/favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Query()
  async track(@Args('id') id: string) {
    return this.favouritesService.findOneById(id);
  }

  @Query()
  async tracks() {
    return this.favouritesService.findAll();
  }
}
