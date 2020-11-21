import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TotalRecipesOutputComponent } from './total-recipes-output/total-recipes-output.component';
import { TotalRecipesInputComponent } from './total-recipes-input/total-recipes-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalRecipesOutputComponent,
    TotalRecipesInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
