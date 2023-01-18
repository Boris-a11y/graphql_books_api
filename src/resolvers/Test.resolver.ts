import { Resolver, Query } from 'type-graphql';

@Resolver()
class testResolver {
  @Query(() => String)
  hello() {
    return 'heyeeee';
  }
}
