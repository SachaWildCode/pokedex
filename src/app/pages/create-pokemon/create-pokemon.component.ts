import { Component } from '@angular/core';
import { CreatePokemonFormComponent } from '../../components/create-pokemon-form/create-pokemon-form.component';

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
  imports: [CreatePokemonFormComponent],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css',
})
export class CreatePokemonComponent {}
