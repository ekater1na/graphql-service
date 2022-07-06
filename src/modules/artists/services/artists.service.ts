import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Artist } from 'src/graphql';

@Injectable()
export class ArtistsService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTISTS_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  async findAll(limit: number, offset: number): Promise<Artist[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return res.data.items;
  }

  async findOneById(id: string): Promise<Artist> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }
}
