import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  providers: [TracksResolver, TracksService],
  exports: [TracksService],
  imports: [BandsModule, ArtistsModule, GenresModule],
})
export class TracksModule {}
