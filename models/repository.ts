export class Repository {
  name: string;
  path: string;
  lastOpen: string | Date;

  constructor(name: string, path: string, lastOpen: string | Date) {
    this.name = name;
    this.path = path;
    this.lastOpen = lastOpen;
  }
}
