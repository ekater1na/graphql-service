import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    return this.usersService.getJwt(email, password);
  }

  @Query()
  async user(@Args('id') id: string) {
    return this.usersService.findUserById(id);
  }
}
