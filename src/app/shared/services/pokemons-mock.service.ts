import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsMockService {
  constructor() {}

  /**
   * Mock data for Generation 1 Pokemons
   */
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: 2,
      name: 'Ivysaur',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
    {
      id: 3,
      name: 'Venusaur',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    },
    {
      id: 4,
      name: 'Charmander',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
      id: 5,
      name: 'Charmeleon',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    },
    {
      id: 6,
      name: 'Charizard',
      types: ['Fire', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    },
    {
      id: 7,
      name: 'Squirtle',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
      id: 8,
      name: 'Wartortle',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    },
    {
      id: 9,
      name: 'Blastoise',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
    },
    {
      id: 10,
      name: 'Caterpie',
      types: ['Bug'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    },
    {
      id: 11,
      name: 'Metapod',
      types: ['Bug'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
    {
      id: 12,
      name: 'Butterfree',
      types: ['Bug', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
      id: 13,
      name: 'Weedle',
      types: ['Bug', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    },
    {
      id: 14,
      name: 'Kakuna',
      types: ['Bug', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    },
    {
      id: 15,
      name: 'Beedrill',
      types: ['Bug', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    },
    {
      id: 16,
      name: 'Pidgey',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    },
    {
      id: 17,
      name: 'Pidgeotto',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    },
    {
      id: 18,
      name: 'Pidgeot',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    },
    {
      id: 19,
      name: 'Rattata',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    },
    {
      id: 20,
      name: 'Raticate',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
    },
    {
      id: 21,
      name: 'Spearow',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
    },
    {
      id: 22,
      name: 'Fearow',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    },
    {
      id: 23,
      name: 'Ekans',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    },
    {
      id: 24,
      name: 'Arbok',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    },
    {
      id: 25,
      name: 'Pikachu',
      types: ['Electric'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
      id: 26,
      name: 'Raichu',
      types: ['Electric'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    },
    {
      id: 27,
      name: 'Sandshrew',
      types: ['Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
    },
    {
      id: 28,
      name: 'Sandslash',
      types: ['Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    },
    {
      id: 29,
      name: 'Nidoran♀',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    },
    {
      id: 30,
      name: 'Nidorina',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    },
    {
      id: 31,
      name: 'Nidoqueen',
      types: ['Poison', 'Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
    },
    {
      id: 32,
      name: 'Nidoran♂',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    },
    {
      id: 33,
      name: 'Nidorino',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    },
    {
      id: 34,
      name: 'Nidoking',
      types: ['Poison', 'Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    },
    {
      id: 35,
      name: 'Clefairy',
      types: ['Fairy'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    },
    {
      id: 36,
      name: 'Clefable',
      types: ['Fairy'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    },
    {
      id: 37,
      name: 'Vulpix',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    },
    {
      id: 38,
      name: 'Ninetales',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    },
    {
      id: 39,
      name: 'Jigglypuff',
      types: ['Normal', 'Fairy'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    {
      id: 40,
      name: 'Wigglytuff',
      types: ['Normal', 'Fairy'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    },
    {
      id: 41,
      name: 'Zubat',
      types: ['Poison', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
    },
    {
      id: 42,
      name: 'Golbat',
      types: ['Poison', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
    },
    {
      id: 43,
      name: 'Oddish',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    },
    {
      id: 44,
      name: 'Gloom',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
    },
    {
      id: 45,
      name: 'Vileplume',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    },
    {
      id: 46,
      name: 'Paras',
      types: ['Bug', 'Grass'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    },
    {
      id: 47,
      name: 'Parasect',
      types: ['Bug', 'Grass'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    },
    {
      id: 48,
      name: 'Venonat',
      types: ['Bug', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    },
    {
      id: 49,
      name: 'Venomoth',
      types: ['Bug', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    },
    {
      id: 50,
      name: 'Diglett',
      types: ['Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
    },
    {
      id: 51,
      name: 'Dugtrio',
      types: ['Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    },
    {
      id: 52,
      name: 'Meowth',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    },
    {
      id: 53,
      name: 'Persian',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    },
    {
      id: 54,
      name: 'Psyduck',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    },
    {
      id: 55,
      name: 'Golduck',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    },
    {
      id: 56,
      name: 'Mankey',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    },
    {
      id: 57,
      name: 'Primeape',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    },
    {
      id: 58,
      name: 'Growlithe',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    },
    {
      id: 59,
      name: 'Arcanine',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    },
    {
      id: 60,
      name: 'Poliwag',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    },
    {
      id: 61,
      name: 'Poliwhirl',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    },
    {
      id: 62,
      name: 'Poliwrath',
      types: ['Water', 'Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    },
    {
      id: 63,
      name: 'Abra',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    },
    {
      id: 64,
      name: 'Kadabra',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    },
    {
      id: 65,
      name: 'Alakazam',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    },
    {
      id: 66,
      name: 'Machop',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    },
    {
      id: 67,
      name: 'Machoke',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    },
    {
      id: 68,
      name: 'Machamp',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
    },
    {
      id: 69,
      name: 'Bellsprout',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    },
    {
      id: 70,
      name: 'Weepinbell',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    },
    {
      id: 71,
      name: 'Victreebel',
      types: ['Grass', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
    },
    {
      id: 72,
      name: 'Tentacool',
      types: ['Water', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    },
    {
      id: 73,
      name: 'Tentacruel',
      types: ['Water', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    },
    {
      id: 74,
      name: 'Geodude',
      types: ['Rock', 'Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    },
    {
      id: 75,
      name: 'Graveler',
      types: ['Rock', 'Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    },
    {
      id: 76,
      name: 'Golem',
      types: ['Rock', 'Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    },
    {
      id: 77,
      name: 'Ponyta',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
    },
    {
      id: 78,
      name: 'Rapidash',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
    },
    {
      id: 79,
      name: 'Slowpoke',
      types: ['Water', 'Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
    },
    {
      id: 80,
      name: 'Slowbro',
      types: ['Water', 'Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    },
    {
      id: 81,
      name: 'Magnemite',
      types: ['Electric', 'Steel'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
    },
    {
      id: 82,
      name: 'Magneton',
      types: ['Electric', 'Steel'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
    },
    {
      id: 83,
      name: "Farfetch'd",
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
    },
    {
      id: 84,
      name: 'Doduo',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    },
    {
      id: 85,
      name: 'Dodrio',
      types: ['Normal', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    },
    {
      id: 86,
      name: 'Seel',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    },
    {
      id: 87,
      name: 'Dewgong',
      types: ['Water', 'Ice'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
    },
    {
      id: 88,
      name: 'Grimer',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    },
    {
      id: 89,
      name: 'Muk',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    },
    {
      id: 90,
      name: 'Shellder',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
    },
    {
      id: 91,
      name: 'Cloyster',
      types: ['Water', 'Ice'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    },
    {
      id: 92,
      name: 'Gastly',
      types: ['Ghost', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    },
    {
      id: 93,
      name: 'Haunter',
      types: ['Ghost', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
    },
    {
      id: 94,
      name: 'Gengar',
      types: ['Ghost', 'Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    },
    {
      id: 95,
      name: 'Onix',
      types: ['Rock', 'Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    },
    {
      id: 96,
      name: 'Drowzee',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
    },
    {
      id: 97,
      name: 'Hypno',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
    },
    {
      id: 98,
      name: 'Krabby',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    },
    {
      id: 99,
      name: 'Kingler',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
    },
    {
      id: 100,
      name: 'Voltorb',
      types: ['Electric'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
    },
    {
      id: 101,
      name: 'Electrode',
      types: ['Electric'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
    },
    {
      id: 102,
      name: 'Exeggcute',
      types: ['Grass', 'Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
    },
    {
      id: 103,
      name: 'Exeggutor',
      types: ['Grass', 'Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    },
    {
      id: 104,
      name: 'Cubone',
      types: ['Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
    },
    {
      id: 105,
      name: 'Marowak',
      types: ['Ground'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
    },
    {
      id: 106,
      name: 'Hitmonlee',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    },
    {
      id: 107,
      name: 'Hitmonchan',
      types: ['Fighting'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
    },
    {
      id: 108,
      name: 'Lickitung',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    },
    {
      id: 109,
      name: 'Koffing',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
    },
    {
      id: 110,
      name: 'Weezing',
      types: ['Poison'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
    },
    {
      id: 111,
      name: 'Rhyhorn',
      types: ['Ground', 'Rock'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
    },
    {
      id: 112,
      name: 'Rhydon',
      types: ['Ground', 'Rock'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
    },
    {
      id: 113,
      name: 'Chansey',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    },
    {
      id: 114,
      name: 'Tangela',
      types: ['Grass'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    },
    {
      id: 115,
      name: 'Kangaskhan',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    },
    {
      id: 116,
      name: 'Horsea',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
    },
    {
      id: 117,
      name: 'Seadra',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    },
    {
      id: 118,
      name: 'Goldeen',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    },
    {
      id: 119,
      name: 'Seaking',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
    },
    {
      id: 120,
      name: 'Staryu',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
    },
    {
      id: 121,
      name: 'Starmie',
      types: ['Water', 'Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    },
    {
      id: 122,
      name: 'Mr. Mime',
      types: ['Psychic', 'Fairy'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
    },
    {
      id: 123,
      name: 'Scyther',
      types: ['Bug', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    },
    {
      id: 124,
      name: 'Jynx',
      types: ['Ice', 'Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
    },
    {
      id: 125,
      name: 'Electabuzz',
      types: ['Electric'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
    },
    {
      id: 126,
      name: 'Magmar',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
    },
    {
      id: 127,
      name: 'Pinsir',
      types: ['Bug'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
    },
    {
      id: 128,
      name: 'Tauros',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
    },
    {
      id: 129,
      name: 'Magikarp',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    },
    {
      id: 130,
      name: 'Gyarados',
      types: ['Water', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    },
    {
      id: 131,
      name: 'Lapras',
      types: ['Water', 'Ice'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    },
    {
      id: 132,
      name: 'Ditto',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    },
    {
      id: 133,
      name: 'Eevee',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    },
    {
      id: 134,
      name: 'Vaporeon',
      types: ['Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    },
    {
      id: 135,
      name: 'Jolteon',
      types: ['Electric'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
    },
    {
      id: 136,
      name: 'Flareon',
      types: ['Fire'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    },
    {
      id: 137,
      name: 'Porygon',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
    },
    {
      id: 138,
      name: 'Omanyte',
      types: ['Rock', 'Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
    },
    {
      id: 139,
      name: 'Omastar',
      types: ['Rock', 'Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
    },
    {
      id: 140,
      name: 'Kabuto',
      types: ['Rock', 'Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
    },
    {
      id: 141,
      name: 'Kabutops',
      types: ['Rock', 'Water'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    },
    {
      id: 142,
      name: 'Aerodactyl',
      types: ['Rock', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    },
    {
      id: 143,
      name: 'Snorlax',
      types: ['Normal'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    },
    {
      id: 144,
      name: 'Articuno',
      types: ['Ice', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    },
    {
      id: 145,
      name: 'Zapdos',
      types: ['Electric', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    },
    {
      id: 146,
      name: 'Moltres',
      types: ['Fire', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
    },
    {
      id: 147,
      name: 'Dratini',
      types: ['Dragon'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    },
    {
      id: 148,
      name: 'Dragonair',
      types: ['Dragon'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
    },
    {
      id: 149,
      name: 'Dragonite',
      types: ['Dragon', 'Flying'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    },
    {
      id: 150,
      name: 'Mewtwo',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    },
    {
      id: 151,
      name: 'Mew',
      types: ['Psychic'],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    },
  ];
}
