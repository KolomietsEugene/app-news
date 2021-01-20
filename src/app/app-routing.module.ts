import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleCardComponent } from './single-card/single-card.component';

const routes: Routes = [
  { path: 'news', component: AppComponent, children: [{ path: 'single-card', component: SingleCardComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
