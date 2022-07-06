import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';
import { AlbumsResolver } from './resolvers/albums.resolver';
import { AlbumsService } from './services/albums.service';

@Module({
  providers: [AlbumsResolver, AlbumsService],
  exports: [AlbumsService],
  imports: [BandsModule, ArtistsModule, GenresModule, TracksModule],
})
export class AlbumsModule {}
