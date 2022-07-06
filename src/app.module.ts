import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistsModule } from './artists/artists.module';
import { GenresModule } from './genres/genres.module';
import { BandsModule } from './bands/bands.module';
import { TracksModule } from './tracks/tracks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ArtistsModule,
    GenresModule,
    BandsModule,
    TracksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
