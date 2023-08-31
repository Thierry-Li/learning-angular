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
  name: string;
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.log('HelloWorldComponent: ngOnInit', this.pokemonList);
    this.selectPokemon(POKEMONS[0])
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Selected pokemon: ${pokemon.name}`);
    this.name = pokemon.name
  }
}
