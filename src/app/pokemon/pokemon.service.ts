import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';
import { PokemonType } from './pokemonType';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {

  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('/api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))

    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`/api/pokemons/${id}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))

    )
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpHeaders = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Pokemon>(`/api/pokemons`, pokemon, httpHeaders).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon | null> {
    const httpHeaders = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<Pokemon>(`/api/pokemons`, pokemon, httpHeaders).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  deletePokemonById(id: number): Observable<Pokemon | null> {
    return this.http.delete<Pokemon>(`/api/pokemons/${id}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`/api/pokemons/?name=${term}`).pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    )
  }

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.log(response);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private handleError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue)
  }

  getPokemonTypeList(): PokemonType[] {
    return [PokemonType.Plante, PokemonType.Feu, PokemonType.Eau, PokemonType.Insecte, PokemonType.Normal, PokemonType.Electrik, PokemonType.Poison, PokemonType.Fée, PokemonType.Psy];
  }
}

