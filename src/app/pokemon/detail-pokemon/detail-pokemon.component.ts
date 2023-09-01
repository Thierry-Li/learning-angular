import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.pokemonList = POKEMONS;

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    this.pokemon = pokemonId ? this.pokemonList.find(pokemon => pokemon.id === +pokemonId) : undefined;
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }
}
