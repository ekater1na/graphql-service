import { Args, Query, Resolver } from '@nestjs/graphql';
import { GenresService } from '../services/genres.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query()
  async genres(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.genresService.findAll(limit, offset);
  }

  @Query()
  async genre(@Args('id') id: string) {
    return this.genresService.findOneById(id);
  }
}
