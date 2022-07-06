import { Args, Query, Resolver } from '@nestjs/graphql';
import { GenresService } from '../services/genres.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query()
  async genre(@Args('id') id: string) {
    return this.genresService.findOneById(id);
  }

  @Query()
  async genres() {
    return this.genresService.findAll();
  }
}
