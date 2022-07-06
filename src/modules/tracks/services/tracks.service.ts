import { Injectable } from '@nestjs/common';
import { Track } from 'src/graphql';

@Injectable()
export class TracksService {
  private tracks: Track[] = [
    {
      id: '62bc7216ad3ba3a9feac811b',
      title: 'Hutorianka',
      bands: [],
      artists: [],
      duration: 180,
      released: 1989,
      genres: [],
    },
    {
      id: '62bc7236ad3ba3a9feac811d',
      title: 'Kapitan',
      bands: [],
      artists: [],
      duration: 180,
      released: 2000,
      genres: [],
    },
  ];

  findAll(): Track[] {
    return this.tracks;
  }

  findOneById(id: string): Track {
    return this.tracks.find((track) => track.id === id);
  }
}
