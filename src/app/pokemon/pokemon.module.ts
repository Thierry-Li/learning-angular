import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BorderCardDirective } from './directives/border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { authGuard } from 'app/auth.guard';


const pokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    component: EditPokemonComponent
  },
  {
  path: 'pokemon/new',
    component: AddPokemonComponent,
  },
  {
    path: 'pokemons',
    component: ListPokemonComponent,
    canActivate: [authGuard]
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
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
