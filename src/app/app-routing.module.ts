import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: 'home', component: ListComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  //{path: '**', redirectTo: '/home'},
  {path: 'detail/:id', loadComponent: () => import('./components/book-detail/book-detail.component')
  .then(cmp => cmp.BookDetailComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
