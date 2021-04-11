import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  CoursesService,
  AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
