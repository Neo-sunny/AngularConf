import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from './my-material.module';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
