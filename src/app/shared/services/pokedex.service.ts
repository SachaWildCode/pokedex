import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PokemonsMockService } from './pokemons-mock.service';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexServiceService {
  private pokemonsSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >(this.pokemonsMockService.pokemons);
  private pokemons: Observable<Pokemon[]> = this.pokemonsSubject.asObservable();

  constructor(private pokemonsMockService: PokemonsMockService) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    const currentPokemons = this.pokemonsSubject.getValue();
    const updatedPokemons = [...currentPokemons, pokemon];
    this.pokemonsSubject.next(updatedPokemons);
  }
}
