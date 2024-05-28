export class Pokemon {
  id: number;
  name: string;
  types: string[];
  image: string;

  constructor(id: number, name: string, types: string[], image: string) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.image = image;
  }
}
