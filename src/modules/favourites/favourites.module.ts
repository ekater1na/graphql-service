import { Module } from '@nestjs/common';
import { FavouritesService } from './services/favourites.service';
import { FavouritesResolver } from './resolvers/favourites.resolver';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';

@Module({
  providers: [FavouritesService, FavouritesResolver],
  exports: [FavouritesService],
  imports: [BandsModule, ArtistsModule, GenresModule, TracksModule],
})
export class FavouritesModule {}
