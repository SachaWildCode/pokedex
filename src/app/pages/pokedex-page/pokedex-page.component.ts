import { Component } from '@angular/core';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../../models/pokemon.model';
import { PokedexServiceService } from '../../shared/services/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css',
})
export class PokedexPageComponent {
  pokemons: Pokemon[] = [];
  selectedPokemon?: Pokemon;

  constructor(
    private pokedexService: PokedexServiceService,
    private router: Router
  ) {
    this.pokedexService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons));
  }

  selectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
  goToCreatePokemon(): void {
    this.router.navigateByUrl('/create');
  }
}
