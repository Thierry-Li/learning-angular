import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { PokemonType } from './pokemonType';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id === id);
  }

  getPokemonTypeList(): PokemonType[] {
    return [PokemonType.Plante, PokemonType.Feu, PokemonType.Eau, PokemonType.Insecte, PokemonType.Normal, PokemonType.Electrik, PokemonType.Poison, PokemonType.Fée, PokemonType.Psy];
  }
}

