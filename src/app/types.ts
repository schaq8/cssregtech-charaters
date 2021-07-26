export interface Collection<T> {
  info: PaginationInfo;
  results: T[];
}

export type Characters = Collection<Character>;
export type Episodes = Collection<Episode>;
export type Locations = Collection<Location>;

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Genderless = "Genderless",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
