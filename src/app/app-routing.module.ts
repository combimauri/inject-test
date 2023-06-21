import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpComponent } from './http/http.component';
import { HttpInjectComponent } from './http-inject/http-inject.component';
import { RouteComponent } from './route/route.component';
import { RouteInjectComponent } from './route-inject/route-inject.component';

const routes: Routes = [
  {
    path: 'http',
    component: HttpComponent,
  },
  {
    path: 'http-inject',
    component: HttpInjectComponent,
  },
  {
    path: 'route/:id',
    component: RouteComponent,
  },
  {
    path: 'route-inject/:id',
    component: RouteInjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
