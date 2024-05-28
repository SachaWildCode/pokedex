import { Injectable } from '@angular/core';
import { PokemonsMockService } from './pokemons-mock.service';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexServiceService {
  private pokemons: Pokemon[] = [];

  constructor(private pokemonsMockService: PokemonsMockService) {
    this.pokemons = this.pokemonsMockService.pokemons;
  }

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  setPokemons(pokemons: Pokemon[]): void {
    this.pokemons = pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }
}
