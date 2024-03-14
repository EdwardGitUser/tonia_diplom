import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { MainPageComponent } from './pages/main-page/main-page/main-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirect to main page by default
  { path: 'main', component: MainPageComponent },
  { path: 'profile', component: UserPageComponent},
  { path: 'info', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
