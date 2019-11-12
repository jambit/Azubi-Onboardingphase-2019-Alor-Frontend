import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MoodOMeterComponent } from './mood-ometer/mood-ometer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoodOMeterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
