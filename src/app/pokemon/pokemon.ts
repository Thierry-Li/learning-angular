import { PokemonType } from "./pokemonType";

export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<PokemonType>;
  created: Date;
}
