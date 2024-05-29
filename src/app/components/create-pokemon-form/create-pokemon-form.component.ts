import { Component, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormArray,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Pokemon } from '../../models/pokemon.model';
import { PokedexServiceService } from '../../shared/services/pokedex.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon-form',
  templateUrl: './create-pokemon-form.component.html',
  styleUrls: ['./create-pokemon-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreatePokemonFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  types: string[] = [
    'Fire',
    'Flying',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
    'Ghost',
    'Steel',
    'Fighting',
    'Rock',
    'Bug',
    'Ground',
    'Poison',
    'Normal',
  ];

  constructor(
    private fb: NonNullableFormBuilder,
    private pokedexService: PokedexServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
    this.patchIndex();
  }

  private patchIndex() {
    this.pokedexService.getPokemons().subscribe((pokemons) => {
      this.form.patchValue({ id: pokemons.length + 1 });
    });
  }

  private createForm() {
    this.form = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required],
      name: ['', Validators.required],
      types: this.fb.array(
        this.types.map(() => this.fb.control(false)),
        this.atLeastOneTypeSelectedValidator()
      ),
      image: ['', [Validators.required, this.validImageUrlValidator()]],
    });
  }

  private atLeastOneTypeSelectedValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const formArray = control as FormArray;
      return formArray.controls.some((ctrl) => ctrl.value)
        ? null
        : { required: true };
    };
  }

  private validImageUrlValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
      return urlPattern.test(control.value) ? null : { invalidUrl: true };
    };
  }

  onCheckboxChange(event: Event, type: string) {
    const checkbox = event.target as HTMLInputElement;
    const typesArray = this.form.get('types') as FormArray;
    const index = typesArray.controls.findIndex((ctrl) => ctrl.value === type);

    if (checkbox.checked && index === -1) {
      typesArray.push(this.fb.control(type));
    } else if (!checkbox.checked && index !== -1) {
      typesArray.removeAt(index);
    }
  }

  private getFormValue(): Pokemon {
    const formValue = this.form.value;
    const selectedTypes = this.types.filter((_, i) => formValue.types[i]);
    return { ...formValue, types: selectedTypes } as Pokemon;
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.errors?.['required']) {
      return `${controlName} is required`;
    } else if (control?.errors?.['invalidUrl']) {
      return `Invalid URL format for ${controlName}`;
    }
    return '';
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const pokemon = this.getFormValue();
      this.pokedexService.addPokemon(pokemon);
      this.form.reset();
      this.patchIndex();
      this.router.navigate(['/']);
    }
  }
}
