import { Module } from '@nestjs/common';
import { FavouritesService } from './services/favourites.service';
import { FavouritesResolver } from './resolvers/favourites.resolver';

@Module({
  providers: [FavouritesService, FavouritesResolver],
  exports: [FavouritesService],
})
export class FavouritesModule {}
