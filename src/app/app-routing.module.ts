import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
