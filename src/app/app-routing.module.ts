import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [
  {path:"",redirectTo:"accueil",pathMatch:'full'},
  {
    path:"accueil", component:HomeComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"presentation",component:PresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
