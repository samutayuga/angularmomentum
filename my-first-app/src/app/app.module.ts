import { TitleCased } from './titlecase.pipe';
import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BlinkersComponent } from './blinkers/blinkers.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    SummaryPipe,
    BlinkersComponent,
    TitleCased,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
