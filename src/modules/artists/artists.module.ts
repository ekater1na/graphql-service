import { Module } from '@nestjs/common';
import { BandsModule } from '../bands/bands.module';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from './services/artists.service';

@Module({
  providers: [ArtistsResolver, ArtistsService],
  exports: [ArtistsService],
  imports: [BandsModule],
})
export class ArtistsModule {}
