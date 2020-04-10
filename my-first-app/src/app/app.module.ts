import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date.component';
import { MessageComponent } from './message.component';
import { Me } from './me.component';
import { BadgeComponent } from './Components/badge/badge.component';
import { CardComponent } from './Components/card/card.component';
import { JumbotronComponent } from './Component/jumbotron/jumbotron.component';
import {HttpClientModule} from '@angular/common/http';
import { GridComponent } from './Components/grid/grid.component'
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
  declarations: [
    AppComponent, DateComponent, BadgeComponent, CardComponent, JumbotronComponent, GridComponent, SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
