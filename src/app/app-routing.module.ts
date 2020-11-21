import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalRecipesInputComponent } from './total-recipes-input/total-recipes-input.component';
import { TotalRecipesOutputComponent } from './total-recipes-output/total-recipes-output.component';

const routes: Routes = [
  {path: '', component: TotalRecipesOutputComponent},
  {path: 'alt', component: TotalRecipesInputComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
