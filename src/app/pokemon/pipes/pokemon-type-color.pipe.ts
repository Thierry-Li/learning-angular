import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '../pokemon.service';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case PokemonType.Feu.toString():
        color = 'red lighten-1';
        break;
      case PokemonType.Eau.toString():
        color = 'blue lighten-1';
        break;
      case PokemonType.Plante.toString():
        color = 'green lighten-1';
        break;
      case PokemonType.Insecte.toString():
        color = 'brown lighten-1';
        break;
      case PokemonType.Normal.toString():
        color = 'grey lighten-3';
        break;
      case PokemonType.Vol.toString():
        color = 'blue lighten-3';
        break;
      case PokemonType.Poison.toString():
        color = 'deep-purple accent-1';
        break;
      case PokemonType.Fée.toString():
        color = 'pink lighten-4';
        break;
      case PokemonType.Psy.toString():
        color = 'deep-purple darken-2';
        break;
      case PokemonType.Electrik.toString():
        color = 'lime accent-1';
        break;
      case PokemonType.Combat.toString():
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return `chip ${color}`;
  }

}
