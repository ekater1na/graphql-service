import {
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { FavouritesService } from '../services/favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async favourites(@Context() context: any) {
    return this.favouritesService.findAll(context);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() favourite) {
    const { bandsIds } = favourite;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() favourite) {
    const { artistsIds } = favourite;
    return await Promise.all(
      artistsIds.map((id) => {
        return this.artistService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() favourite) {
    const { genresIds } = favourite;
    return await Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() favourite) {
    const { tracksIds } = favourite;
    return await Promise.all(
      tracksIds.map((id) => {
        return this.tracksService.findOneById(id);
      }),
    );
  }
}
