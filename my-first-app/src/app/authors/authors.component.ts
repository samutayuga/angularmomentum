import { AuthorsService, Author } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors: Author[];
  h3label: string;
  colspan = 2;
  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.authors;
    this.h3label = this.authors.length + ' Authors';
  }

  ngOnInit(): void {}
}
