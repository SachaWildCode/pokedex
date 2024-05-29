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
  >(this.loadPokemonsFromLocalStorage());
  public pokemons$: Observable<Pokemon[]> = this.pokemonsSubject.asObservable();

  constructor(private pokemonsMockService: PokemonsMockService) {
    if (this.pokemonsSubject.getValue().length === 0) {
      const initialPokemons = this.pokemonsMockService.pokemons;
      this.pokemonsSubject.next(initialPokemons);
      this.savePokemonsToLocalStorage(initialPokemons);
    }
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.pokemons$;
  }

  setPokemons(pokemons: Pokemon[]): void {
    this.pokemonsSubject.next(pokemons);
    this.savePokemonsToLocalStorage(pokemons);
  }

  addPokemon(pokemon: Pokemon): void {
    const currentPokemons = this.pokemonsSubject.getValue();
    const updatedPokemons = [...currentPokemons, pokemon];
    this.pokemonsSubject.next(updatedPokemons);
    this.savePokemonsToLocalStorage(updatedPokemons);
    console.log(pokemon);
  }

  private savePokemonsToLocalStorage(pokemons: Pokemon[]): void {
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }

  private loadPokemonsFromLocalStorage(): Pokemon[] {
    const pokemons = localStorage.getItem('pokemons');
    return pokemons ? JSON.parse(pokemons) : [];
  }
}
