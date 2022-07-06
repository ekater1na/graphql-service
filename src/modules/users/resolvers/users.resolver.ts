import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async user(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }
}
