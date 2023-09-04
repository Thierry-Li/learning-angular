import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(private router: Router, private route: ActivatedRoute,private pokemonService: PokemonService) {

  }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService.getPokemonById(parseInt(pokemonId)).subscribe((pokemon) => {
        this.pokemon = pokemon
      });
    }
  }
    goBack() {
      this.router.navigate(['/pokemons']);
    }
    goToEdit(pokemon: Pokemon) {
      this.router.navigate(['/edit/pokemon', pokemon.id]);
    }


  deletePokemon(pokemon: Pokemon): void{
    this.pokemonService
      .deletePokemonById(pokemon.id)
      .subscribe(() => {
        this.goToPokemonList();
      });
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons'])
  }
}
