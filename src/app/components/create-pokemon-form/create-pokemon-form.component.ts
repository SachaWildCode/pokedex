import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Pokemon } from '../../models/pokemon.model';
import { PokedexServiceService } from '../../shared/services/pokedex.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-pokemon-form',
  templateUrl: './create-pokemon-form.component.html',
  styleUrls: ['./create-pokemon-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreatePokemonFormComponent {
  form!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private pokedexService: PokedexServiceService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      types: this.fb.array([], Validators.required),
      image: ['', Validators.required],
    });
  }

  getFormValue(): Pokemon {
    return this.form.value as Pokemon;
  }

  onSubmit() {
    const pokemon = this.getFormValue();
    if (pokemon instanceof Pokemon) {
      this.pokedexService.addPokemon(pokemon);
    }
  }
}
