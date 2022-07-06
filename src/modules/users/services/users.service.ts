import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { User } from 'src/graphql';

@Injectable()
export class UsersService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USERS_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  async findOneById(id: string): Promise<User> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }
}
