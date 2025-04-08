import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ElementsModule } from './elements/elements.module';

const routes: Routes = [
  {path:'elements',loadChildren:()=>import('./elements/elements.module').then(n=>n.ElementsModule)},
  {path:'collections',loadChildren:()=>import('./collections/collections.module').then(n=>n.CollectionsModule)},
  {path:'views',loadChildren:()=>import('./views/views.module').then(n=>n.ViewsModule)},
  {path:'mods',loadChildren:()=>import('./mods/mods.module').then(n=>n.ModsModule)},

  {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
   {path:'notfound',component:NotFoundComponent},
   {path:'**',redirectTo:'/notfound'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

