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
  }

  async getJwt(email: string, password: string) {
    const res = await this.client.post('/login', { email, password });
    return res.data;
  }

  async findUserById(id: string): Promise<User> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }
}
