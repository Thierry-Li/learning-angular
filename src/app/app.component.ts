import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learning';
  name: string|undefined;
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.log('HelloWorldComponent: ngOnInit', this.pokemonList);
  }

  // selectPokemon(pokemon: Pokemon) {
  selectPokemon(pokemonId: number): void {
    this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === pokemonId);
    this.name =  this.pokemonSelected?.name ?? "non trouvé";
  }
}
