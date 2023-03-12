import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './categories-list/category-form/category-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/:id', component: CategoryFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    RouterModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AppRoutingModule { }
