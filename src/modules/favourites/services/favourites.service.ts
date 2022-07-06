import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Favourites } from 'src/graphql';

@Injectable()
export class FavouritesService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVOURITES_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  async findAll(limit: number, offset: number): Promise<Favourites[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return res.data.items;
  }

  async findOneById(id: string): Promise<Favourites> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }
}
