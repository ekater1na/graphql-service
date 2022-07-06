import { Module } from '@nestjs/common';
import { GenresService } from './services/genres.service';
import { GenresResolver } from './resolvers/genres.resolver';

@Module({
  providers: [GenresService, GenresResolver],
  exports: [GenresService],
})
export class GenresModule {}
