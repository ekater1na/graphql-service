import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { AlbumsService } from '../services/albums.service';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async album(@Args('id') id: string) {
    return this.albumsService.findOneById(id);
  }

  @Query()
  async albums() {
    return this.albumsService.findAll();
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() album) {
    const { bandsIds } = album;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() album) {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map((id) => {
        return this.artistService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() album) {
    const { genresIds } = album;
    return await Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() album) {
    const { tracksIds } = album;
    return await Promise.all(
      tracksIds.map((id) => {
        return this.tracksService.findOneById(id);
      }),
    );
  }
}
