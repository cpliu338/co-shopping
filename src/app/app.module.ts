import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Import of the angular-material angular module
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // Import of the angular-material angular module
    AngularMaterialModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
