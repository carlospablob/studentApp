import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
