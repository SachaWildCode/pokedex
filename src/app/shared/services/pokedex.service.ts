import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { POKEMONS } from './pokemons-mock.service';

@Injectable({
  providedIn: 'root',
})
export class PokedexServiceService {
  private pokemonsSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>(POKEMONS);
  private pokemons: Observable<Pokemon[]> = this.pokemonsSubject.asObservable();

  constructor() {}

  getPokemons(): Observable<Pokemon[]> {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    const currentPokemons = this.pokemonsSubject.getValue();
    const updatedPokemons = [...currentPokemons, pokemon];
    this.pokemonsSubject.next(updatedPokemons);
  }
}
