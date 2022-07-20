import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}

  @Query()
  async artists(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.artistsService.findAll(limit, offset);
  }

  @Query()
  async artist(@Args('id') id: string) {
    return this.artistsService.findOneById(id);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() artist) {
    const { bandsIds } = artist;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }
}
