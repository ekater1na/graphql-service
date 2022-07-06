import { Injectable } from '@nestjs/common';
import { Band } from 'src/graphql';

@Injectable()
export class BandsService {
  private bands: Band[] = [];

  findAll(): Band[] {
    return this.bands;
  }

  findOneById(id: string): Band {
    return this.bands.find((band) => band.id === id);
  }
}
