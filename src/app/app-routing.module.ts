import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { ContentLayoutComponent } from './components/shared/layout/content-layout/content-layout.component';
import { contentRoutes } from './components/shared/routes/content-routes';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: '', component: ContentLayoutComponent, children:contentRoutes,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
