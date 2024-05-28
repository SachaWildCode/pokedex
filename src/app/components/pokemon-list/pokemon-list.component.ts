import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() select = new EventEmitter<Pokemon>();

  onSelect(pokemon: Pokemon): void {
    this.select.emit(pokemon);
  }
}
