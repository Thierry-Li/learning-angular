import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;
  constructor(private router: Router, private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemonService.createPokemon(pokemon)
  }

  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }
}
