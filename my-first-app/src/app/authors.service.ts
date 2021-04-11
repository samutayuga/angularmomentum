import { Injectable } from '@angular/core';
export class Author {
  constructor(
    private _name: string,
    private _pub: number,
    private _rating: number
  ) {}

  get name() {
    return this._name;
  }
  get rating() {
    return this._rating;
  }
  get pub() {
    return this._pub;
  }
}
@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  // tslint:disable-next-line: variable-name
  private _authors: Author[];
  constructor() {
    // tslint:disable-next-line: variable-nam
    this._authors = [
      new Author('Jack Dowson', 10, 12),
      new Author('Edington', 15, 22),
      new Author('Jecko Kim', 11, 34),
    ];
  }

  // tslint:disable-next-line: typedef
  get authors() {
    return this._authors;
  }
}
