import { Args, Query, Resolver } from '@nestjs/graphql';
import { BandsService } from '../services/bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Query()
  async bands(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.bandsService.findAll(limit, offset);
  }

  @Query()
  async band(@Args('id') id: string) {
    return this.bandsService.findOneById(id);
  }
}
