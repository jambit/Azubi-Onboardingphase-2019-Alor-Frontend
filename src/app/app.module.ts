import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MoodOMeterComponent } from './mood-ometer/mood-ometer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'angular-bootstrap-md';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RefreshButtonChartsComponent } from './refresh-button-charts/refresh-button-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodOMeterComponent,
    PieChartComponent,
    BarChartComponent,
    RefreshButtonChartsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
