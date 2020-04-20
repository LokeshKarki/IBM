import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ViewQuizesComponent } from './view-quizes/view-quizes.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'view-quiz', component:  ViewQuizesComponent},
  { path: 'start-quiz', component: TakeQuizComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    ViewQuizesComponent,
    TakeQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,  
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
