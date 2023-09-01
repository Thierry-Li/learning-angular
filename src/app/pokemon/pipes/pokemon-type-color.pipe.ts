import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '../pokemonType';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: PokemonType): string {
    let color: string;

    switch (type) {
      case PokemonType.Feu:
        color = 'red lighten-1';
        break;
      case PokemonType.Eau:
        color = 'blue lighten-1';
        break;
      case PokemonType.Plante:
        color = 'green lighten-1';
        break;
      case PokemonType.Insecte:
        color = 'brown lighten-1';
        break;
      case PokemonType.Normal:
        color = 'grey lighten-3';
        break;
      case PokemonType.Vol:
        color = 'blue lighten-3';
        break;
      case PokemonType.Poison:
        color = 'deep-purple accent-1';
        break;
      case PokemonType.Fée:
        color = 'pink lighten-4';
        break;
      case PokemonType.Psy:
        color = 'deep-purple darken-2';
        break;
      case PokemonType.Electrik:
        color = 'lime accent-1';
        break;
      case PokemonType.Combat:
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return `chip ${color}`;
  }

}
