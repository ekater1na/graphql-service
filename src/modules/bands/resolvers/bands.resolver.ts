import { Args, Query, Resolver } from '@nestjs/graphql';
import { BandsService } from '../services/bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Query()
  async band(@Args('id') id: string) {
    return this.bandsService.findOneById(id);
  }

  @Query()
  async bands() {
    return this.bandsService.findAll();
  }
}
