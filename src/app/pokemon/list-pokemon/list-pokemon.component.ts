import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = this.pokemonService.getPokemonList();

  constructor(private router: Router, private pokemonService: PokemonService){}

  goToPokemon(pokemonId: number): void {
    this.router.navigate(['/pokemon', pokemonId]);
  }
}
