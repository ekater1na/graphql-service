
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Album {
    id?: Nullable<string>;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    albums(): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<string>;
    instruments?: Nullable<string>;
    pseudonims?: Nullable<string>;
    labels?: Nullable<string>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    website?: Nullable<string>;
    genres?: Nullable<string>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
    subGenres?: Nullable<Nullable<Genre>[]>;
}

export interface IMutation {
    createGenre(name?: Nullable<string>, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;
}

export interface Track {
    id: string;
    title: string;
    bands?: Nullable<Nullable<Band>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface JWT {
    jwt: string;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    password: string;
    email: string;
}

type Nullable<T> = T | null;
