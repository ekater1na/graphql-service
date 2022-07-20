import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Favourites } from 'src/graphql';

@Injectable()
export class FavouritesService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVORITES_URL,
    });
  }

  async findAll(context): Promise<Favourites[]> {
    const { authorization } = context.req.headers;
    const { res } = await this.client.get('/', {
      headers: {
        authorization,
      },
    });
    console.log(context.req.headers.authorization);

    return res;
  }
}
