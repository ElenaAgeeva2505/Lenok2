import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppComponent2Component } from './app-component2/app-component2.component';
import { AppComponent3Component } from './app-component3/app-component3.component';
import { NumberPipePipe } from './number-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent2Component,
    AppComponent3Component,
    NumberPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
