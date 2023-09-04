import { PokemonType } from "./pokemonType";

export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<PokemonType>;
  created: Date;

  constructor(
    name = "Pokemon",
    hp = 100,
    cp = 10,
    pictures = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: PokemonType[] = [PokemonType.Normal],
    created: Date = new Date
  ) {

    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = pictures;
    this.types = types;
    this.created = created;



  }
}
