import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BorderCardDirective } from './directives/border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';


const pokemonRoutes: Routes = [
  {
    path: 'pokemons',
    component: ListPokemonComponent,
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent,
  },
];

@NgModule({
  declarations: [
    HelloWorldComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
