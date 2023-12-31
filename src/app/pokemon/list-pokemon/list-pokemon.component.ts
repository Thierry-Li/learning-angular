import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(): void {
      this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }
  goToPokemon(pokemonId: number): void {
    this.router.navigate(['/pokemon', pokemonId]);
  }
  goToAddPokemonForm(): void {
    this.router.navigate(['/pokemon/new']);
  }

  addNewPokemon(): void {
    this.goToAddPokemonForm();
  }
}
